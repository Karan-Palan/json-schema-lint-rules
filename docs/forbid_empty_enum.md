---
title: Disallow empty \`enum\` arrays
code: forbid_empty_enum
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`enum` must contain at least one element. An empty array always fails validation and is likely a mistake.

> **Message shown to user:**
> Remove empty enum or add allowed values.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": []
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [
    "option1",
    "option2"
  ]
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values>
