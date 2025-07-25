---
title: Remove \`type\` when \`const\` is present
code: const_with_type
categories: readability
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
`const` fixes the instance to a single value, which already determines its primitive type.

> **Message shown to user:**
> Delete the redundant `type` keyword (or drop `const`).

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
  "const": "ready"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "const": "ready"
}
```
</details>

## References
* <https://www.learnjsonschema.com/2020-12/validation/const/>
