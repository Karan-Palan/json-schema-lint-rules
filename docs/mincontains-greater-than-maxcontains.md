---
title: \`minContains\` must not exceed \`maxContains\`
code: mincontains-greater-than-maxcontains
categories: correctness
dialects: 2019-09, 2020-12
autofixable: false
---

## Description
If both keywords are present, `minContains` must be ≤ `maxContains`; otherwise the array constraint is unsatisfiable.

> **Message shown to user:**
> Adjust numeric bounds so `minContains` ≤ `maxContains`, or drop one keyword.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "type": "array",
  "maxContains": 1,
  "minContains": 3,
  "contains": {
    "type": "string"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-maxcontains>
