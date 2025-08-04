---
title: Duplicate values in \`required\`
code: duplicate_required_values
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting duplicate values in required` is considered an anti-pattern.

> **Message shown to user:**
> Remove duplicate values from the `required` array.

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
