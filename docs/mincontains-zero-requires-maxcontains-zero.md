---
title: \`minContains: 0\` requires \`maxContains: 0\`
code: mincontains-zero-requires-maxcontains-zero
categories: correctness, readability
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
In draft-2019-09 and draft-2020-12, using `minContains:0` expresses that *no* array element may match `contains`. For clarity, also set `maxContains` to 0.

> **Message shown to user:**
> Add `maxContains: 0` when `minContains` is 0 (or raise `minContains`).

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "minContains": 0,
  "contains": {
    "type": "string"
  }
}
```
</details>

<details><summary>After</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "maxContains": 0,
  "minContains": 0,
  "contains": {
    "type": "string"
  }
}
```
</details>

### Example 2
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "minContains": 0,
  "contains": {
    "type": "string"
  }
}
```
</details>

<details><summary>After</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "contains": {
    "type": "string"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contains>
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-mincontains>
