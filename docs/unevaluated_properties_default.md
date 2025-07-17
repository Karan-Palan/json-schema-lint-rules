---
title: Consider if \`unevaluatedProperties:true/{}\` is necessary
code: unevaluated_properties_default
categories: style
dialects: 2020-12
autofixable: false
---

## Description
While `unevaluatedProperties:true` (or `{}`) may appear redundant, removing it can change schema behavior in some contexts. Verify it's safe to remove before doing so.

> **Message shown to user:**
> Verify if `unevaluatedProperties` can be safely removed.

### Example 1
<details><summary>Before</summary>

```json
{
  "type": "object",
  "unevaluatedProperties": true
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-validation.html#name-unevaluatedproperties>
