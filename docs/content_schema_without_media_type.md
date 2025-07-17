---
title: \`contentSchema\` without \`contentMediaType\` is unhelpful
code: content_schema_without_media_type
categories: readability, style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`contentSchema` refines the structure of non-JSON media; without a media type consumers cannot choose a codec.

> **Message shown to user:**
> Add `contentMediaType` or drop `contentSchema`.

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
