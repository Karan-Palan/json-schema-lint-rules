---
title: Remove empty arrays in \`dependentRequired\`
code: dependent-required-tautology
categories: style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
An empty `dependentRequired` list has no effect and clutters the schema.

> **Message shown to user:**
> Delete empty dependency arrays.

### Example 1
<details><summary>Before</summary>

```json
{
  "dependentRequired": {
    "meta": []
  }
}
```
</details>

<details><summary>After</summary>

```json
{}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-dependentrequired>
