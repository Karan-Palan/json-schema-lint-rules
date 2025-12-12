---
title: Remove single-\`$ref\` \`allOf\` wrapper (draft-2019-09, 2020-12 only)
code: unnecessary_allof_ref_wrapper_modern
categories: readability, style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
Wrapping `$ref` in `allOf` was only necessary in JSON Schema Draft 7 and older.

> **Message shown to user:**
> Inline the `$ref` and delete the redundant `allOf` wrapper.

### Example 1
<details><summary>Before</summary>

```json
{
  "allOf": [
    {
      "$ref": "#/$defs/User"
    }
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "$ref": "#/$defs/User"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-allof>
