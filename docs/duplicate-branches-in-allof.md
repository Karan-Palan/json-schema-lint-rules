---
title: Collapse duplicate schemas in \`allOf\`
code: duplicate-branches-in-allof
categories: readability, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`allOf` with duplicate branches is redundant and can be collapsed.

> **Message shown to user:**
> Remove duplicate branches; keep one instance.

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
