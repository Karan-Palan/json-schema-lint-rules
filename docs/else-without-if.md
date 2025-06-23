---
title: \`else\` without \`if\` is ignored
code: else-without-if
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`else` only has meaning when paired with `if`. If `if` is missing, drop the `else` branch.

> **Message shown to user:**
> Remove `else` because there is no matching `if`.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "else": {
    "type": "string"
  }
}
```
</details>

<details><summary>After</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-conditionals>
