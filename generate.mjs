#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RULE_SCHEMA = path.join(__dirname, "rule.schema.json");
const RULES_DIR = path.join(__dirname, "rules");
const DOCS_DIR = path.join(__dirname, "docs");

function jsonschemaBin() {
  const bin = path.join(
    __dirname,
    "node_modules",
    ".bin",
    process.platform === "win32" ? "jsonschema.cmd" : "jsonschema"
  );
  return bin;
}

// helpers
const mdEscape = (s) => s.replace(/`/g, "\\`");

function renderMarkdown(rule, code) {
  const dialects = Object.keys(rule.dialects).join(", ");
  const autofix = rule.examples.some((e) => "after" in e);

  const lines = [];
  lines.push("---");
  lines.push(`title: ${mdEscape(rule.title)}`);
  lines.push(`code: ${code}`);
  lines.push(`categories: ${rule.categories.join(", ")}`);
  lines.push(`dialects: ${dialects}`);
  lines.push(`autofixable: ${autofix}`);
  lines.push("---\n");

  lines.push("## Description");
  lines.push(rule.description + "\n");

  lines.push("> **Message shown to user:**");
  lines.push(`> ${rule.message}\n`);

  const docExamples = rule.examples.filter((e) => e.doc) || [rule.examples[0]];

  docExamples.forEach(({ before, after }, i) => {
    lines.push(`### Example ${i + 1}`);
    lines.push("<details><summary>Before</summary>\n");
    lines.push("```json");
    lines.push(JSON.stringify(before, null, 2));
    lines.push("```");
    lines.push("</details>\n");

    if (after) {
      lines.push("<details><summary>After</summary>\n");
      lines.push("```json");
      lines.push(JSON.stringify(after, null, 2));
      lines.push("```");
      lines.push("</details>\n");
    }
  });

  if (rule.references?.length) {
    lines.push("## References");
    rule.references.forEach((u) => lines.push(`* <${u}>`));
    lines.push("");
  }

  return lines.join("\n");
}

(async () => {
  await fs.mkdir(DOCS_DIR, { recursive: true });

  for (const file of await fs.readdir(RULES_DIR)) {
    if (!file.endsWith(".json")) continue;
    const rulePath = path.join(RULES_DIR, file);

    // schema-validate the rule file
    const { status } = spawnSync(
      jsonschemaBin(),
      ["validate", RULE_SCHEMA, rulePath],
      { stdio: "inherit" }
    );
    if (status !== 0) process.exit(status);

    // render Markdown
    const rule = JSON.parse(await fs.readFile(rulePath, "utf8"));
    const code = path.basename(file, ".json");
    const markdown = renderMarkdown(rule, code);
    await fs.writeFile(path.join(DOCS_DIR, `${code}.md`), markdown);

    console.log(`✓ docs/${code}.md`);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
