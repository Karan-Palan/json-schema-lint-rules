---
title: \`required\` array must contain unique names
code: duplicate-required-values
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Listing a property name more than once in `required` adds no constraint and can hide copy-paste mistakes.

> **Message shown to user:**
> Remove duplicate entries from `required`.

### Example 1
<details><summary>Before</summary>
```json
{
  "type": "object",
  "required": [
    "id",
    "name",
    "id"
  ]
}
```
</details>

<details><summary>After</summary>
```json
{
  "type": "object",
  "required": [
    "id",
    "name"
  ]
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#required-properties>
