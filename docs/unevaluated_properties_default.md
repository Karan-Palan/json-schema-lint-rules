---
title: Consider if \`unevaluatedProperties:true/{}\` is necessary
code: unevaluated_properties_default
categories: style
dialects: 2020-12
autofixable: true
---

## Description
Setting the `unevaluatedProperties` keyword to the true schema does not add any further constraint

> **Message shown to user:**
> Verify if `unevaluatedProperties` can be safely removed.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "unevaluatedProperties": true
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
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-unevaluatedproperties>
