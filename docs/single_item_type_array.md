---
title: Collapse single-item \`type\` arrays
code: single_item_type_array
categories: style, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`type` may be an array to express a union, but if it contains exactly one element it should be written as a scalar for clarity and easier downstream processing.

> **Message shown to user:**
> Replace the array with its single type value.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": [
    "string"
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/type.html#simple-type>
