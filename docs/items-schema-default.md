---
title: Omit \`items:{}\` (it’s the default)
code: items-schema-default
categories: style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
When `items` is the always-true schema (`{}` or `true`) it adds no restriction and should be omitted.

> **Message shown to user:**
> Remove `items` when it is the always-true schema.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {}
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-boolean-schemas>
