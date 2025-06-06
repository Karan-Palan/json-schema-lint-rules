---
title: When \`contains\` is present, \`minItems\` must be ≥ 1
code: contains-requires-minitems
categories: correctness
dialects: 2019-09, 2020-12
autofixable: false
---

## Description
In draft-2019-09 and newer, a schema with `contains` but no `minContains` implies at least one matching element; `minItems:0` contradicts that.

> **Message shown to user:**
> Remove `minItems:0` or add `minContains`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "minItems": 0,
  "contains": {
    "type": "string"
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contains>
