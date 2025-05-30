---
title: \`required\` entries must exist in \`properties\` / \`patternProperties\`
code: ensure-required-properties-defined
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
List only property names that are actually declared. Regex patterns in `patternProperties` are ignored unless they exactly match the required name.

> **Message shown to user:**
> Remove or rename entries in `required` that have no schema definition.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": [
    "name",
    "age"
  ],
  "properties": {
    "name": {
      "type": "string"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/object.html#required-properties>
