---
title: Omit \`contentSchema:{}\` (it’s the default)
code: content_schema_default
categories: style
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
Setting the `contentSchema` keyword to the true schema (or `{}`) does not add any further constraint.

> **Message shown to user:**
> Remove `contentSchema` when it is `true` or empty.

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
