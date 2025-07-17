---
title: Wrapping any keyword other than \`$ref\` in \`allOf\` is unnecessary
code: unnecessary_allof_wrapper_draft
categories: style, readability
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
In Draft 4-7, keywords other than `$ref` can be moved out of `allOf` to the parent level when they don't conflict with existing keywords.

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
