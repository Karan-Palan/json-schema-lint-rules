#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RULE_SCHEMA = path.join(__dirname, "rule.schema.json");
const RULES_DIR = path.join(__dirname, "rules");
const DOCS_DIR = path.join(__dirname, "docs");

// helpers
const mdEscape = (str) => str.replace(/`/g, "\\`");

function render(rule, code) {
  const firstCat = rule.categories[0];
  const dialects = Object.keys(rule.dialects).join(", ");
  const autofixable = rule.examples.some((ex) => "after" in ex);

  const out = [];

  // YAML front-matter
  out.push("---");
  out.push(`title: ${mdEscape(rule.title)}`);
  out.push(`code: ${code}`);
  out.push(`categories: ${rule.categories.join(", ")}`);
  out.push(`dialects: ${dialects}`);
  out.push(`autofixable: ${autofixable}`);
  out.push("---\n");

  out.push("## Description");
  out.push(rule.description + "\n");

  out.push("> **Message shown to user:**");
  out.push(`> ${rule.message}\n`);

  const docExamples = rule.examples.filter((e) => e.doc) || [rule.examples[0]];

  docExamples.forEach(({ before, after }, idx) => {
    out.push(`### Example ${idx + 1}`);
    out.push("<details><summary>Before</summary>");
    out.push("");
    out.push("```json");
    out.push(JSON.stringify(before, null, 2));
    out.push("```");
    out.push("</details>\n");

    if (after) {
      out.push("<details><summary>After</summary>");
      out.push("");
      out.push("```json");
      out.push(JSON.stringify(after, null, 2));
      out.push("```");
      out.push("</details>\n");
    }
  });

  if (rule.references?.length) {
    out.push("## References");
    rule.references.forEach((u) => out.push(`* <${u}>`));
    out.push("");
  }

  return { md: out.join("\n") };
}

(async function main() {
  const files = await fs.readdir(RULES_DIR);
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const rulePath = path.join(RULES_DIR, file);

    // schema-validate the rule file
    const { status } = spawnSync(
      "jsonschema",
      ["validate", RULE_SCHEMA, rulePath],
      { stdio: "inherit" }
    );
    if (status !== 0) process.exit(status);

    // render Markdown
    const rule = JSON.parse(await fs.readFile(rulePath, "utf8"));
    const code = path.basename(file, ".json");
    const { md } = render(rule, code);

    await fs.mkdir(DOCS_DIR, { recursive: true });
    await fs.writeFile(path.join(DOCS_DIR, `${code}.md`), md);

    console.log(`✓ docs/${code}.md`);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
