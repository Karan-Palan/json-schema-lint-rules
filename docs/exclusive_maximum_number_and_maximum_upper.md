---
title: Keep only the tighter upper bound (\`exclusiveMaximum\` vs \`maximum\`)
code: exclusive_maximum_number_and_maximum_upper
categories: correctness
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
When both `maximum` and numeric `exclusiveMaximum` are present, one of them is redundant. Retain the stricter limit and drop the other.

> **Message shown to user:**
> Drop the looser upper-bound keyword; it’s redundant.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "number",
  "exclusiveMaximum": 5,
  "maximum": 6
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "number",
  "exclusiveMaximum": 5
}
```
</details>

## References
* <https://json-schema.org/draft/2019-09/json-schema-validation.html#name-exclusivemaximum>
