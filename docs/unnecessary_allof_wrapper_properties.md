---
title: Avoid unnecessarily wrapping object \`properties\` in \`allOf\`
code: unnecessary_allof_wrapper_properties
categories: style, readability
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
When `allOf` contains schemas with `properties` that don't conflict with the parent's `properties`, move them to the parent level for clarity.

> **Message shown to user:**
> Move non-conflicting properties from `allOf` to parent level.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "allOf": [
    {
      "properties": {
        "age": {
          "type": "integer"
        }
      }
    }
  ],
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
  "type": "object",
  "properties": {
    "age": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/combining.html#allof>
