---
title: Real \`minimum\` on integer schema
code: minimum_real_for_integer
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
If an instance is guaranteed to be an integer, setting a real number lower bound is the same as ceiling that bound.

> **Message shown to user:**
> Ceil the real `minimum` to an integer value.

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
