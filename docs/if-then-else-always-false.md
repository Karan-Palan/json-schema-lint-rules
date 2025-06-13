---
title: \`then\` or \`else\` is always-false schema
code: if-then-else-always-false
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`then` or `else` set to `false` always fails validation, which may be unintended.

> **Message shown to user:**
> Avoid always-false `then`/`else` schemas unless intentional.

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
  "then": false
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
  "else": false
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
