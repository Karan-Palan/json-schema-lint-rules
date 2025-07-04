---
title: \`contentSchema\` without \`contentMediaType\` is unhelpful
code: content-schema-requires-media-type
categories: readability, style
dialects: 2019-09, 2020-12, draft7
autofixable: false
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

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contentschema>
