---
title: \`$ref\` targets must resolve
code: unresolved-ref-pointer
categories: correctness, safety
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
Every relative JSON Pointer in `$ref` must resolve to a subschema within the same document. If the `$ref` is an absolute/URI reference, it must locate a retrievable JSON Schema resource. Dangling pointers or links to non-schema content are errors.

> **Message shown to user:**
> Ensure `$ref` resolves to an existing subschema or to a valid JSON Schema resource.

### Example 1
<details><summary>Before</summary>
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": {
      "$ref": "#/$defs/uuid"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.8.3>
* <https://json-schema.org/understanding-json-schema/structuring.html#id64>
