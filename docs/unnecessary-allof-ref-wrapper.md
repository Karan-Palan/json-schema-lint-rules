---
title: Remove single-\`$ref\` \`allOf\` wrapper (draft-2019-09, 2020-12 only)
code: unnecessary-allof-ref-wrapper
categories: readability, style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
In draft-04/06/07 the `$ref` MUST remain inside the `allOf`; starting in 2019-09 a solitary `$ref` does not require the wrapper.

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
