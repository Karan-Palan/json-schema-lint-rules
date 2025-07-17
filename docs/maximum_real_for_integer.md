---
title: Round down real \`maximum\` for integer schemas
code: maximum_real_for_integer
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
For `type:"integer"`, a non-integer `maximum` is equivalent to its floor value.

> **Message shown to user:**
> Floor the real `maximum` or convert it to an integer value.

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
