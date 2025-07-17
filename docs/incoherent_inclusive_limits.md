---
title: \`minimum\` must not exceed \`maximum\`
code: incoherent_inclusive_limits
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
Inclusive bounds are contradictory when minimum > maximum.

> **Message shown to user:**
> Adjust numeric limits or swap their values.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "number",
  "maximum": 5,
  "minimum": 10
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#range>
