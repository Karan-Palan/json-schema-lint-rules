---
title: Collapse duplicate schemas in \`allOf\`
code: duplicate_allof_branches
categories: readability, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting duplicate subschemas in `allOf` is redundant and only adds unnecessary validation work.

> **Message shown to user:**
> Remove duplicate branches; keep just one instance.

### Example 1
<details><summary>Before</summary>

```json
{
  "allOf": [
    {
      "type": "string"
    },
    {
      "type": "string"
    }
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "allOf": [
    {
      "type": "string"
    }
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-allof>
