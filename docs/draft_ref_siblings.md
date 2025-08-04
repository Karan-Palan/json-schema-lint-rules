---
title: Remove siblings of $ref (draft-07 and older)
code: draft_ref_siblings
categories: readability, style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
In Draft 7 and older dialects, keywords that are siblings of `$ref` are never evaluated.

> **Message shown to user:**
> Remove sibling keywords – in drafts ≤ 7 only `$ref` is evaluated.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "ignored in draft-07",
  "$ref": "#/definitions/INTEGER",
  "type": "integer",
  "minimum": 0
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/INTEGER"
}
```
</details>

## References
* <https://json-schema.org/draft-07/draft-handrews-json-schema-01#rfc.section.8.3>
