---
title: Require $schema at the document root
code: require-schema-declaration
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Every JSON Schema should declare its dialect with a top-level `$schema` keyword to avoid ambiguous interpretation.

> **Message shown to user:**
> Add a `$schema` property pointing to the draft URI.

### Example 1
<details><summary>Before</summary>
```json
{
  "type": "object",
  "properties": {
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
    "name": {
      "type": "string"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/specification>
