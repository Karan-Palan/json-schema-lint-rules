---
title: \`else\` without \`if\` is meaningless
code: else_without_if
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
The `else` keyword is meaningless without the presence of the `if` keyword.

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
