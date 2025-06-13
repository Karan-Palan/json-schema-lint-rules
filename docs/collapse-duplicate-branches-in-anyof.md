---
title: Collapse duplicate schemas in \`anyOf\`
code: collapse-duplicate-branches-in-anyof
categories: readability, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Redundant branches inside `anyOf` add noise without changing validation results.

> **Message shown to user:**
> Remove duplicate schemas; keep one representative branch.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "anyOf": [
    {
      "type": "integer"
    },
    {
      "type": "integer"
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
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "anyOf": [
    {
      "type": "integer"
    },
    {
      "type": "string"
    }
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-anyof>
