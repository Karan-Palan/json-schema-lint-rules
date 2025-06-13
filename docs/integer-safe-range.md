---
title: Integer limits should stay within IEEE-754 safe range
code: integer-safe-range
categories: safety, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Languages that use IEEE-754 doubles (e.g. JavaScript) can only represent integers accurately between −9 007 199 254 740 991 and +9 007 199 254 740 991. Declare `minimum`/`maximum` inside that range to avoid precision loss.

> **Message shown to user:**
> Constrain integer limits to Number.MAX_SAFE_INTEGER bounds.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "integer",
  "maximum": 90071992547409980,
  "minimum": -90071992547409980
}
```
</details>

<details><summary>After</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "integer",
  "maximum": 9007199254740991,
  "minimum": -9007199254740991
}
```
</details>

## References
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER>
