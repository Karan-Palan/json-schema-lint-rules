---
title: Do not set both \`readOnly\` and \`writeOnly\`
code: conflicting_readonly_writeonly
categories: correctness, readability
dialects: 2019-09, 2020-12, draft7
autofixable: false
---

## Description
`readOnly:true` means a value is *output-only*; `writeOnly:true` means it is *input-only*. Setting both to `true` simultaneously is contradictory.

> **Message shown to user:**
> Remove either `readOnly` or `writeOnly` (or both).

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "password": {
      "readOnly": true,
      "writeOnly": true,
      "type": "string"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-readonly>
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-writeonly>
