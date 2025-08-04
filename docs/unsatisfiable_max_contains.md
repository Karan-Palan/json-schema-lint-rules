---
title: \`maxContains\` less than \`minContains\` is unsatisfiable
code: unsatisfiable_max_contains
categories: correctness
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
If `maxContains` is present it must be ≥ `minContains` (or ≥ 1 if `minContains` is omitted).

> **Message shown to user:**
> Increase `maxContains` or lower `minContains`.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "array",
  "maxContains": 1,
  "minContains": 3,
  "contains": {
    "type": "integer"
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "array",
  "maxContains": 3,
  "minContains": 1,
  "contains": {
    "type": "integer"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-maxcontains>
