---
title: Property already required – \`dependencies\` tautology
code: dependencies_property_tautology
categories: style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
Using `dependencies` to declare that a property depends on itself (when it is already in `required`) is unnecessary and needlessly complex.

> **Message shown to user:**
> Remove tautological entries from `dependencies` (property is already required).

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "required": [
    "id",
    "name"
  ],
  "dependencies": {
    "id": [
      "name"
    ]
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "object",
  "required": [
    "id",
    "name"
  ]
}
```
</details>

## References
* <https://json-schema.org/draft-07/json-schema-validation.html#dependencies>
