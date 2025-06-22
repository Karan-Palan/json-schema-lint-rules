---
title: \`required\` names must be declared or matched by a pattern
code: ensure-required-properties-defined
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Every entry in `required` must correspond to a key in `properties` or match at least one regex in `patternProperties`.

> **Message shown to user:**
> Remove unknown names, declare them, or add a matching pattern.

### Example 1
<details><summary>Before</summary>
```json
{
  "type": "object",
  "required": [
    "a",
    "b",
    "c"
  ],
  "patternProperties": {
    "^a|b$": {
      "type": "string"
    }
  }
}
```
</details>

<details><summary>After</summary>
```json
{
  "type": "object",
  "required": [
    "a",
    "b"
  ],
  "patternProperties": {
    "^a|b$": {
      "type": "string"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#required-properties>
* <https://json-schema.org/understanding-json-schema/reference/object.html#pattern-properties>
