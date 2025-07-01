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

  // Show examples marked with doc:true, or all examples if none are marked
  const docExamples = rule.examples.filter((e) => e.doc);
  const examplesWithBefore = rule.examples.filter((e) => e.before);
  const examplesToShow = docExamples.length > 0 ? docExamples : examplesWithBefore.slice(0, 2);
  
  examplesToShow.forEach(({ before, after }, i) => {
    lines.push(`### Example ${i + 1}`);
    lines.push("<details><summary>Before</summary>\n\n```json");
    lines.push(JSON.stringify(before, null, 2));
    lines.push("```\n</details>\n");

    if (after) {
      lines.push("<details><summary>After</summary>\n\n```json");
      lines.push(JSON.stringify(after, null, 2));
      lines.push("```\n</details>\n");
    }
  });

  if (rule.references?.length) {
    lines.push("## References");
    rule.references.forEach((u) => lines.push(`* <${u}>`));
    lines.push("");
  }
  return lines.join("\n");
}

// main script
(async () => {
  await fs.mkdir(DOCS_DIR, { recursive: true });

  // build a set of valid rule codes from rule filenames
  const ruleFiles = (await fs.readdir(RULES_DIR)).filter((f) =>
    f.endsWith(".json")
  );
  const ruleCodes = new Set(ruleFiles.map((f) => path.basename(f, ".json")));

  // cleanup phase: delete orphan markdown
  for (const file of await fs.readdir(DOCS_DIR)) {
    if (!file.endsWith(".md")) continue;
    const code = path.basename(file, ".md");
    if (!ruleCodes.has(code)) {
      await fs.unlink(path.join(DOCS_DIR, file));
      console.log(`✗ removed orphan docs/${file}`);
    }
  }

  // generate / update markdown for each rule
  for (const file of ruleFiles) {
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
