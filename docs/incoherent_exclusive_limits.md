---
title: \`exclusiveMinimum\` must be strictly less than \`exclusiveMaximum\`
code: incoherent_exclusive_limits
categories: correctness
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
In draft-06 and newer the exclusive keywords take numeric values. They must satisfy `exclusiveMinimum < exclusiveMaximum`.

> **Message shown to user:**
> Ensure exclusiveMinimum is lower than exclusiveMaximum.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "number",
  "exclusiveMaximum": 50,
  "exclusiveMinimum": 100
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "number",
  "exclusiveMaximum": 100,
  "exclusiveMinimum": 50
}
```
</details>

## References
* <https://json-schema.org/draft/2019-09/json-schema-validation.html#section-6.2.3>
