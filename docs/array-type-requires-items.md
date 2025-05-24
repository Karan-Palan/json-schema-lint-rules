---
title: Arrays should declare \`items\`
code: array-type-requires-items
categories: readability, correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
An `array` without `items` leaves element validation undefined. Provide an explicit `items` schema, even if it’s `{}`.

> **Message shown to user:**
> Add an `items` schema for array elements.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {}
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/array.html#items>
