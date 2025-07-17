---
title: Omit \`additionalProperties:true\` (it’s the default)
code: additional_properties_default
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`additionalProperties` defaults to `true`. Setting it explicitly adds noise without changing validation behaviour.

> **Message shown to user:**
> Remove `"additionalProperties": true`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": true
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object"
}
```
</details>

## References
* <https://www.learnjsonschema.com/2020-12/structuring/#additionalproperties>
