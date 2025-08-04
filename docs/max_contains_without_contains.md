---
title: \`maxContains\` without \`contains\` is meaningless
code: max_contains_without_contains
categories: correctness
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
The `maxContains` keyword is meaningless without the presence of the `contains` keyword.

> **Message shown to user:**
> Remove `maxContains` or add a `contains` keyword.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "type": "array",
  "maxContains": 1
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "type": "array"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-maxcontains>
