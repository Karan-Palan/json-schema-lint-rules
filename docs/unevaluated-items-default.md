---
title: Omit \`unevaluatedItems:true/{}\` (default behaviour)
code: unevaluated-items-default
categories: style
dialects: 2020-12
autofixable: true
---

## Description
`unevaluatedItems` set to `true` or `{}` does not change validation; drop it for brevity.

> **Message shown to user:**
> Remove redundant `unevaluatedItems`.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "array",
  "items": {
    "type": "integer"
  },
  "unevaluatedItems": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "array",
  "items": {
    "type": "integer"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-unevaluateditems>
