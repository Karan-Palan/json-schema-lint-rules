---
title: Disallow duplicate values in enum
code: duplicate_enum_values
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
All elements in `enum` must be unique; duplicates add no meaning and may hide mistakes.

> **Message shown to user:**
> Remove duplicate values from enum array.

### Example 1
<details><summary>Before</summary>

```json
{
  "enum": [
    "a",
    "b",
    "a"
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "enum": [
    "a",
    "b"
  ]
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values>
