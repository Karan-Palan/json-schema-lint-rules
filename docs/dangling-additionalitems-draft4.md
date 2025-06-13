---
title: \`additionalItems\` ignored when \`items\` is an object (draft-04)
code: dangling-additionalitems-draft4
categories: correctness
dialects: draft4
autofixable: true
---

## Description
In draft-04 only, `additionalItems` has no effect unless `items` is an array. Flag this redundant combination.

> **Message shown to user:**
> Remove `additionalItems` or convert `items` into an array.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
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
  "$schema": "http://json-schema.org/draft-04/schema#",
  "items": {
    "type": "number"
  }
}
```
</details>

## References
* <https://json-schema.org/draft-04/json-schema-validation.html#anchor66>
