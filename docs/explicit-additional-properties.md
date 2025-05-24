---
title: Explicitly define additionalProperties
code: explicit-additional-properties
categories: readability, style, opinionated
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Object schemas should always specify `additionalProperties` (either `false`, `true`, or a subschema) to make the allowance of extra keys explicit.

> **Message shown to user:**
> Add an explicit `additionalProperties` declaration.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    }
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#additional-properties>
