---
title: Keep only the tighter lower bound (\`exclusiveMinimum\` vs \`minimum\`)
code: exclusive_maximum_number_and_maximum_lower
categories: correctness
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
If both `minimum` and numeric `exclusiveMinimum` coexist, remove the weaker bound.

> **Message shown to user:**
> Drop the weaker lower-bound keyword; it’s redundant.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "number",
  "exclusiveMinimum": 10,
  "minimum": 8
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "number",
  "exclusiveMinimum": 10
}
```
</details>

## References
* <https://json-schema.org/draft/2019-09/json-schema-validation.html#name-exclusiveminimum>
