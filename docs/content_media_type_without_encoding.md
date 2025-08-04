---
title: \`contentMediaType\` without \`contentEncoding\` is meaningless
code: content_media_type_without_encoding
categories: readability, style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
The `contentMediaType` keyword has no effect unless `contentEncoding` is also present.

> **Message shown to user:**
> Add `contentEncoding` or remove `contentMediaType`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
  "contentMediaType": "image/png"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
  "contentEncoding": "base64",
  "contentMediaType": "image/png"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contentencoding>
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contentmediatype>
