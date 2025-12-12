---
title: Wrapping any keyword other than \`$ref\` in \`allOf\` is unnecessary
code: unnecessary_allof_ref_wrapper_draft
categories: style, readability
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
Wrapping `$ref` in `allOf` is only necessary if there are other sibling keywords.

> **Message shown to user:**
> Move keywords from `allOf` to parent level when they don't conflict.

### Example 1
<details><summary>Before</summary>

```json
{
  "allOf": [
    {
      "type": "string",
      "minLength": 5
    }
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "string",
  "minLength": 5
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/combining.html#allof>
