---
title: Require \`title\` and \`description\` metadata
code: require-description-title
categories: readability, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Every schema should provide human-readable `title` and `description` fields so downstream tooling and documentation stay meaningful.

> **Message shown to user:**
> Add `title` and `description` to the schema.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    }
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "User e-mail payload",
  "description": "Schema for validating an e-mail address submission.",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/generic.html#annotations>
