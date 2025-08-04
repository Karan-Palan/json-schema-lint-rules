---
title: Duplicate entries in \`required\`
code: duplicate_required_values
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
The `required` array must contain unique property names. Duplicated values are redundant and can be removed.

> **Message shown to user:**
> Remove duplicate items from the `required` array.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "required": [
    "id",
    "name",
    "id"
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "object",
  "required": [
    "id",
    "name"
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-required>
