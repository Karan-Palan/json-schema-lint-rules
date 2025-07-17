---
title: Equal numeric bounds can be expressed with single-value \`enum\`
code: equal_numeric_bounds_to_enum
categories: style, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting `minimum` and `maximum` to the same number only leaves one possible value; use `enum` with a single value.

> **Message shown to user:**
> Replace equal numeric bounds with single-value `enum`.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "number",
  "maximum": 5,
  "minimum": 5
}
```
</details>

<details><summary>After</summary>

```json
{
  "enum": [
    5
  ]
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values>
