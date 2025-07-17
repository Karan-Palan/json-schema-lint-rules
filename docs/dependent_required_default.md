---
title: Remove empty \`dependentRequired\` object
code: dependent_required_default
categories: style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
`dependentRequired:{}` has no effect and should be removed.

> **Message shown to user:**
> Delete the empty `dependentRequired` object.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "dependentRequired": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-dependentrequired>
