---
title: \`const\` and \`enum\` are mutually exclusive
code: const-and-enum-conflict
categories: correctness
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: false
---

## Description
`const` defines one exact value. Adding an `enum` is redundant or contradictory.

> **Message shown to user:**
> Remove `enum` when `const` is present, or vice-versa.

### Example 1
<details><summary>Before</summary>

```json
{
  "const": 5,
  "enum": [
    5,
    6
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-const>
