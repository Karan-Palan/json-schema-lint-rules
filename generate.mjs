#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const RULE_SCHEMA = path.join(__dirname, "rule.schema.json");
const RULES_DIR = path.join(__dirname, "rules");
const DOCS_DIR = path.join(__dirname, "docs");

function renderMarkdown(rule, code, category) {
  const block = [];

  block.push("---");
  block.push(`title: ${rule.title}`);
  block.push(`code: ${code}`);
  block.push(`category: ${category}`);
  block.push(`vocabularies: ${rule.vocabularies.join(", ")}`);
  block.push("---\n");

  block.push("## Description");
  block.push(rule.description + "\n");

  block.push("> **Message shown to user:**");
  block.push(`> ${rule.message}\n`);

  if (rule.invalid?.length) {
    block.push("## Invalid example");
    block.push("```json");
    block.push(JSON.stringify(rule.invalid[0].schema, null, 2));
    block.push("```\n");
  }

  if (rule.valid?.length) {
    block.push("## Valid example");
    block.push("```json");
    block.push(JSON.stringify(rule.valid[0].schema, null, 2));
    block.push("```\n");
  }

  if (rule.references?.length) {
    block.push("## References");
    rule.references.forEach((u) => block.push(`* <${u}>`));
    block.push(""); // trailing newline
  }

  return block.join("\n");
}

(async function main() {
  await fs.mkdir(DOCS_DIR, { recursive: true });

  for (const catDir of await fs.readdir(RULES_DIR, { withFileTypes: true })) {
    if (!catDir.isDirectory()) continue;
    const category = catDir.name;
    const srcCat = path.join(RULES_DIR, category);
    const outCat = path.join(DOCS_DIR, category);
    await fs.mkdir(outCat, { recursive: true });

    for (const file of await fs.readdir(srcCat)) {
      if (!file.endsWith(".json")) continue;
      const rulePath = path.join(srcCat, file);

      // schema-validate the rule file
      const { status } = spawnSync(
        "jsonschema",
        ["validate", RULE_SCHEMA, rulePath],
        { stdio: "inherit" }
      );
      if (status !== 0) process.exit(status);

      // render Markdown
      const rule = JSON.parse(await fs.readFile(rulePath, "utf8"));
      const code = path.basename(file, ".json"); // filename = rule code
      const md = renderMarkdown(rule, code, category);
      await fs.writeFile(path.join(outCat, `${code}.md`), md);

      console.log(`✓ ${category}/${code}.md`);
    }
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
