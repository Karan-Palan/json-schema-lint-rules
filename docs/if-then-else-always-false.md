---
title: Desugar \`then:false\` / \`else:false\` branches
code: if-then-else-always-false
categories: style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`if: S, then:false` is logically equivalent to `not: S`. Likewise `if: S, else:false` collapses to `allOf:[S]` (or just `S`).

> **Message shown to user:**
> Replace always-false branches with their equivalent negation.

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
  "not": {
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
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-boolean-schemas>
