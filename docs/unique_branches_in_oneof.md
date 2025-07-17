---
title: Branches in \`oneOf\` must be unique
code: unique_branches_in_oneof
categories: correctness, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: false
---

## Description
`oneOf` is intended for mutually-exclusive alternatives; duplicate schemas make it ambiguous which branch should match.

> **Message shown to user:**
> Remove or modify duplicate schemas inside `oneOf`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "oneOf": [
    {
      "type": "string"
    },
    {
      "type": "string"
    }
  ]
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-oneof>
