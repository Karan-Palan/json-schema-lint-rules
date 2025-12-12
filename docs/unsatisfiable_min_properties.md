---
title: \`minProperties\` covered by \`required\`
code: unsatisfiable_min_properties
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting `minProperties` to a number less than `required` does not add any further constraint.

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
