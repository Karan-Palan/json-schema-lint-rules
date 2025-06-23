---
title: Round up real \`minimum\` for integer schemas
code: minimum-real-for-integer
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
On an integer schema, a non-integer `minimum` can be replaced by its ceiling value.

> **Message shown to user:**
> Ceil the real `minimum` or convert it to an integer value.

### Example 1
<details><summary>Before</summary>
```json
{
  "type": "integer",
  "minimum": 3.2
}
```
</details>

<details><summary>After</summary>
```json
{
  "type": "integer",
  "minimum": 4
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#range>
