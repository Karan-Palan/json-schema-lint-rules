---
title: Omit \`additionalProperties:true\` (it’s the default)
code: additional_properties_default
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting the `additionalProperties` keyword to the true schema does not add any further constraint.

> **Message shown to user:**
> Remove the redundant `"additionalProperties": true` entry.

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
