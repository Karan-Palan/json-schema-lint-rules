---
title: \`else\` is an empty schema
code: else_empty
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`else` set to the empty schema (`{}`) does not restrict validation and is most likely ineffective.

> **Message shown to user:**
> Remove empty `else` or add restrictions.

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
