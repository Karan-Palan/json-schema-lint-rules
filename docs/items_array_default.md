---
title: Omit empty \`items: []\`
code: items_array_default
categories: style
dialects: 2019-09, draft4, draft6, draft7
autofixable: true
---

## Description
`items` as an empty array imposes no constraints in drafts up to 2019-09. Remove it for clarity.

> **Message shown to user:**
> Remove the empty `items` array.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": []
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array"
}
```
</details>

## References
* <https://json-schema.org/draft/07/json-schema-validation.html#items>
