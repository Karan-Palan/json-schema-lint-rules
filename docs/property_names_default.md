---
title: \`propertyNames\` is an empty schema
code: property_names_default
categories: correctness
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
Setting the `propertyNames` keyword to the empty object does not add any further constraint.

> **Message shown to user:**
> Remove empty `propertyNames`; it has no effect.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "propertyNames": {}
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
* <https://json-schema.org/draft/2019-09/json-schema-validation.html#name-propertynames>
