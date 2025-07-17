---
title: Omit \`unevaluatedProperties:true/{}\` (default behaviour)
code: unevaluated_properties_default
categories: style
dialects: 2020-12
autofixable: true
---

## Description
`unevaluatedProperties:true` (or `{}`) is the default and need not be stated explicitly.

> **Message shown to user:**
> Remove redundant `unevaluatedProperties`.

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
