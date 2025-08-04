---
title: \`minContains: 0\` without \`maxContains\` never fails
code: mincontains_zero_without_maxcontains
categories: style, readability
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
When `minContains` is 0 and `maxContains` is absent, the schema accepts any number of matching elements. Specify `maxContains` to make the constraint meaningful.

> **Message shown to user:**
> Add an upper bound with `maxContains` or remove `minContains: 0`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "minContains": 0,
  "contains": {
    "type": "number"
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "maxContains": 10,
  "minContains": 0,
  "contains": {
    "type": "number"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-mincontains>
