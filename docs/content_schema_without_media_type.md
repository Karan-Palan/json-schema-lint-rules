---
title: \`contentSchema\` without \`contentMediaType\` is meaningless
code: content_schema_without_media_type
categories: readability, style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
The `contentSchema` keyword has no effect unless `contentMediaType` is also present.

> **Message shown to user:**
> Add `contentMediaType` or remove `contentSchema`.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "string",
  "contentSchema": {
    "type": "object"
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "string",
  "contentMediaType": "application/json",
  "contentSchema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/schema",
    "type": "object"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contentschema>
