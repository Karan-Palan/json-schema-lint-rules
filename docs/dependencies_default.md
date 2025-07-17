---
title: Remove empty \`dependencies\` object
code: dependencies_default
categories: style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
`dependencies:{}` never alters validation; it should be dropped.

> **Message shown to user:**
> Delete the empty `dependencies` object.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "dependencies": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object"
}
```
</details>

## References
* <https://json-schema.org/draft/07/json-schema-validation.html#dependencies>
