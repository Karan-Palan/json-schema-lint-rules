---
title: \`format\` must match declared \`type\`
code: format-type-mismatch
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: false
---

## Description
`format` applies only to string instances. Using it with another `type` is invalid.

> **Message shown to user:**
> Remove `format` or set `type` to `"string"`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "integer",
  "format": "uuid"
}
```
</details>

### Example 2
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": [
    "integer",
    "boolean"
  ],
  "format": "email"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-format>
