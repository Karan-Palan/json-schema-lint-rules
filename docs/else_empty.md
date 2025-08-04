---
title: \`else\` is an empty schema
code: else_empty
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
Setting the else keyword to the empty schema does not add any further constraint.

> **Message shown to user:**
> Remove the empty else schema or add restrictions.

### Example 1
<details><summary>Before</summary>

```json
{
  "if": {
    "properties": {
      "flag": {
        "const": true
      }
    }
  },
  "else": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "if": {
    "properties": {
      "flag": {
        "const": true
      }
    }
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-conditionals>
