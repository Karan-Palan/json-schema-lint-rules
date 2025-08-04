---
title: \`if: S, else:false\` collapses to just \`S\`
code: else_false
categories: style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`if: S, else:false` is logically equivalent to just `S` – the wrapper adds no constraint.

> **Message shown to user:**
> Inline the `if` schema and drop `else:false`.

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
