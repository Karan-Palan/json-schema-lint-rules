---
title: Remove empty \`properties\` object
code: properties-default
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`properties:{}` does not impose any constraints. Drop it to reduce clutter.

> **Message shown to user:**
> Delete the empty `properties` object.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "properties": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "object"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#properties>
