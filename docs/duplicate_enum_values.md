---
title: Disallow duplicate values in enum
code: duplicate_enum_values
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting duplicate values in `enum` is an anti-pattern and adds no information.

> **Message shown to user:**
> Remove duplicate values from the `enum` array.

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
