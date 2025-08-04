---
title: \`additionalItems\` ignored when \`items\` is a schema
code: additional_items_with_schema_items
categories: correctness
dialects: 2019-09, draft4, draft6, draft7
autofixable: true
---

## Description
The `additionalItems` keyword is ignored whenever `items` is a single schema object rather than an array.

> **Message shown to user:**
> Remove `additionalItems` (or convert `items` into an array).

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "items": {
    "type": "number"
  },
  "additionalItems": false
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "items": {
    "type": "number"
  }
}
```
</details>

## References
* <https://json-schema.org/draft-04/json-schema-validation.html#anchor66>
* <https://json-schema.org/draft/2019-09/release-notes#unevaluateditems>
