---
title: Remove sibling properties when \`$ref\` is present (Draft 4-7)
code: ref_no_sibling_properties_draft
categories: correctness, style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
In Draft 4, 6, and 7, `$ref` ignores all sibling properties. Remove them to avoid confusion and make the schema clearer.

> **Message shown to user:**
> Remove properties alongside `$ref` or wrap in `allOf`.

### Example 1
<details><summary>Before</summary>

```json
{
  "description": "A user object",
  "$ref": "#/definitions/User",
  "type": "object"
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
* <https://json-schema.org/understanding-json-schema/structuring.html#ref>
