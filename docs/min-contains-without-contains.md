---
title: \`minContains\` without \`contains\` is meaningless
code: min-contains-without-contains
categories: correctness
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
`minContains` has no effect unless a `contains` schema is also provided.

> **Message shown to user:**
> Remove `minContains` or add a `contains` keyword.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "minContains": 2
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-mincontains>
