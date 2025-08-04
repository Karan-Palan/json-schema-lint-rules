---
title: Remove empty \`patternProperties\` object
code: pattern_properties_default
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Setting the `patternProperties` keyword to the empty object does not add any further constraint.

> **Message shown to user:**
> Delete the empty `patternProperties` object.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "patternProperties": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "type": "object"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#pattern-properties>
