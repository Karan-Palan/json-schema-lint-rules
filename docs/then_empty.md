---
title: \`then\` is an empty schema
code: then_empty
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`Setting the `then` keyword to the empty schema does not add any further constraint.

> **Message shown to user:**
> Remove empty `then` or add restrictions.

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
  "then": {}
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
