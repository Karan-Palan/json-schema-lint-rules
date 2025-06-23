---
title: Avoid redundant \`type:"string"\` inside \`propertyNames\`
code: redundant-type-in-propertynames
categories: style, readability
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
`propertyNames` always validates **object property keys**, which are strings by definition; adding `type:"string"` is unnecessary noise.

> **Message shown to user:**
> Remove the redundant `type:"string"` inside `propertyNames`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "propertyNames": {
    "type": "string",
    "pattern": "^S_"
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "propertyNames": {
    "pattern": "^S_"
  }
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#property-names>
