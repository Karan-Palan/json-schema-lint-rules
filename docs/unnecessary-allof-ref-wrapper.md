---
title: Remove single-\`$ref\` \`allOf\` wrapper
code: unnecessary-allof-ref-wrapper
categories: readability, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`allOf` containing only one `$ref` adds no semantics; reference the schema directly.

> **Message shown to user:**
> Inline the `$ref` and drop the unnecessary `allOf`.

### Example 1
<details><summary>Before</summary>
```json
{
  "allOf": [
    {
      "$ref": "#/definitions/User"
    }
  ]
}
```
</details>

<details><summary>After</summary>
```json
{
  "$ref": "#/definitions/User"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-allof>
