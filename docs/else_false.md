---
title: \`else:false\` branch can be desugared
code: else_false
categories: style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`if: S, else:false` collapses to just `S` (since the schema is valid only when `S` is true).

> **Message shown to user:**
> Replace `else:false` with its equivalent positive schema.

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
  "else": false
}
```
</details>

<details><summary>After</summary>

```json
{
  "properties": {
    "flag": {
      "const": true
    }
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-conditionals>
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-boolean-schemas>
