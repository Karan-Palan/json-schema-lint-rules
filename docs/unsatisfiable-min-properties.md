---
title: \`minProperties\` covered by \`required\`
code: unsatisfiable-min-properties
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
If the number of items in `required` ≥ `minProperties`, the `minProperties` keyword is redundant.

> **Message shown to user:**
> Remove `minProperties` – the `required` list already guarantees that many properties.

### Example 1
<details><summary>Before</summary>
```json
{
  "type": "object",
  "required": [
    "a",
    "b"
  ],
  "minProperties": 2
}
```
</details>

<details><summary>After</summary>
```json
{
  "type": "object",
  "required": [
    "a",
    "b"
  ]
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#properties>
