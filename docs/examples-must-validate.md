---
title: Values in \`examples\` must validate against the schema
code: examples-must-validate
categories: correctness, readability
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: false
---

## Description
Each entry in an `examples` array should be a valid instance of the schema it annotates; misleading examples hinder tooling and docs.

> **Message shown to user:**
> Remove or fix invalid example values.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "examples": [
    "not-an-integer"
  ],
  "type": "integer"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-examples>
