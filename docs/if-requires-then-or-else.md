---
title: \`if\` without \`then\` or \`else\` is ineffective
code: if-requires-then-or-else
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
A lone `if` keyword has no impact on validation; at least one of `then` or `else` must accompany it.

> **Message shown to user:**
> Add `then`, `else`, or remove `if`.

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
  }
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
  },
  "then": {
    "required": [
      "flag"
    ]
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-conditionals>
