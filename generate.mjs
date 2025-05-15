#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const RULE_SCHEMA = "rule.schema.json";
const RULES_DIR = "rules";
const DOCS_DIR = "docs";

await fs.mkdir(DOCS_DIR, { recursive: true });

for (const categoryDir of await fs.readdir(RULES_DIR, {
  withFileTypes: true,
})) {
  if (!categoryDir.isDirectory()) continue;
  const category = categoryDir.name;
  const ruleDir = path.join(RULES_DIR, category);

  for (const file of await fs.readdir(ruleDir)) {
    if (!file.endsWith(".json")) continue;
    const rulePath = path.join(ruleDir, file);

    // Validate rule metadata
    const { status } = spawnSync(
      "jsonschema",
      ["validate", RULE_SCHEMA, rulePath],
      { stdio: "inherit" }
    );
    if (status !== 0) process.exit(status);

    // Generate markdown
    const rule = JSON.parse(await fs.readFile(rulePath, "utf8"));
    const outDir = path.join(DOCS_DIR, category);
    await fs.mkdir(outDir, { recursive: true });
    const md = render(rule, category);
    await fs.writeFile(
      path.join(outDir, `${path.basename(file, ".json")}.md`),
      md
    );
    console.log("✓", rule.code);
  }
}

function render(r, cat) {
  return `---
title: ${r.title}
code: ${r.code}
category: ${cat}
severity: ${r.severity}
dialects: ${r.dialects.join(", ")}
---

## Description
${r.description}

## Invalid example
\`\`\`json
${JSON.stringify(r.invalid[0].schema, null, 2)}
\`\`\`

## Valid example
\`\`\`json
${JSON.stringify(r.valid[0].schema, null, 2)}
\`\`\`

${
  r.references?.length
    ? "## References\n" + r.references.map((u) => `* <${u}>`).join("\n")
    : ""
}
`;
}
