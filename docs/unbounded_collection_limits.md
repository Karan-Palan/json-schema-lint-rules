---
title: Arrays and strings should declare upper size limits
code: unbounded_collection_limits
categories: safety, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
Omitting `maxItems` for arrays or `maxLength` for strings can lead to unbounded payloads and denial-of-service risks.

> **Message shown to user:**
> Add `maxItems` or `maxLength` to cap collection size.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {
    "type": "integer"
  }
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/array.html#length>
* <https://json-schema.org/understanding-json-schema/reference/string.html#length>
