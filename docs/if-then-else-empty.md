---
title: \`then\` or \`else\` is an empty schema
code: if-then-else-empty
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`then` or `else` with an empty schema (`{}`) does not restrict validation and is likely ineffective.

> **Message shown to user:**
> Remove empty `then`/`else` or add restrictions.

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

### Example 2
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
