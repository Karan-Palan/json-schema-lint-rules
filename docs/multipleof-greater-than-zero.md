---
title: \`multipleOf\` must be > 0
code: multipleof-greater-than-zero
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
The value of `multipleOf` has to be a strictly positive number; zero or negative values are invalid.

> **Message shown to user:**
> Set `multipleOf` to a number greater than zero.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "integer",
  "multipleOf": 0
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#multiple-of>
