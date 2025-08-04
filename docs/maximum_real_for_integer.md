---
title: Real \`maximum\` on integer schema
code: maximum_real_for_integer
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
If an instance is guaranteed to be an integer, setting a real number upper bound is the same as flooring that bound.

> **Message shown to user:**
> Floor the real `maximum` to an integer value.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "integer",
  "maximum": 7.8
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "integer",
  "maximum": 7
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#range>
