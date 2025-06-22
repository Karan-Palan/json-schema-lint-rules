---
title: \`multipleOf: 1\` is redundant
code: validate-multipleof-value
categories: style, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
A divisor of 1 accepts every number that already matches the parent `type`; dropping it makes schemas clearer.

> **Message shown to user:**
> Remove `multipleOf` when its value is 1.

### Example 1
<details><summary>Before</summary>
```json
{
  "type": "integer",
  "multipleOf": 1
}
```
</details>

<details><summary>After</summary>
```json
{
  "type": "integer"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#multiple-of>
