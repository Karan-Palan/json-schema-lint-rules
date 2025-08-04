---
title: Property already required – \`dependentRequired\` tautology
code: dependent_required_tautology
categories: style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
Specifying dependents for a property that is itself in `required` adds no constraint and complicates the schema.

> **Message shown to user:**
> Remove tautological `dependentRequired` entries (property is already required).

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "required": [
    "meta"
  ],
  "dependentRequired": {
    "meta": [
      "data"
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
    "meta",
    "data"
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-dependentrequired>
