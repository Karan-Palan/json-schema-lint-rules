---
title: Numeric limits must be coherent
code: incoherent-numeric-limits
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
`minimum` cannot exceed `maximum`; same for the exclusive forms.

> **Message shown to user:**
> Adjust numeric limits so minimum ≤ maximum.

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
* <https://json-schema.org/understanding-json-schema/reference/numeric.html>
