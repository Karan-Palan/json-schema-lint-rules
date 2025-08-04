---
title: Replace single-value enum with const
code: enum_to_const
categories: correctness, readability
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
Setting `type` alongside `enum` is considered an anti-pattern, as the enumeration already implies its types.

> **Message shown to user:**
> Drop the redundant `type` keyword (or drop `enum`).

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [
    "foo"
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "const": "foo"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/const>
