---
title: Validate \`multipleOf\` value
code: validate-multipleof-value
categories: correctness, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`multipleOf` has two sanity checks:
1. **Correctness** – the value MUST be strictly greater than 0 (spec requirement).
2. **Style** – the value SHOULD NOT be 1, because that accepts every number and adds no constraint.

> **Message shown to user:**
> Use a `multipleOf` greater than 0 and different from 1.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "integer",
  "multipleOf": 0
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#multiple-of>
