---
title: Disallow type-specific keywords on incompatible types
code: non_applicable_type_specific_keywords
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
Keywords like `minimum` apply only to numbers; `minLength` only to strings, etc. Mixing them is always invalid.

> **Message shown to user:**
> Remove keyword(s) that do not apply to the declared type.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
  "minimum": 1
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6>
