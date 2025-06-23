---
title: Omit \`contentSchema:{}\` (it’s the default)
code: content-schema-default
categories: style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`contentSchema` set to `{}` (or `true`) imposes no constraints. Leaving it in the schema only adds noise.

> **Message shown to user:**
> Remove empty `contentSchema` – it adds no validation power.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
  "contentSchema": {}
}
```
</details>

<details><summary>After</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contentschema>
