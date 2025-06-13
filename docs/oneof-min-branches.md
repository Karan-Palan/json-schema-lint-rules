---
title: \`oneOf\` must contain at least two schemas
code: oneof-min-branches
categories: correctness, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
A single-branch `oneOf` is meaningless; use the schema directly instead.

> **Message shown to user:**
> Add a second branch or remove `oneOf` wrapper.

### Example 1
<details><summary>Before</summary>
```json
{
  "oneOf": [
    {
      "type": "string"
    }
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.10.2.1>
