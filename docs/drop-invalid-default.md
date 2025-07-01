---
title: \`default\` value must validate
code: drop-invalid-default
categories: correctness, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`default` is supposed to be a valid example of the instance. If it does **not** satisfy the schema, drop it so that tools and docs are not mis-led.

> **Message shown to user:**
> Remove `default` – its value doesn’t validate.

### Example 1
<details><summary>Before</summary>

```json
{
  "default": "not-an-integer",
  "type": "integer"
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
* <https://json-schema.org/understanding-json-schema/reference/generic.html#default>
