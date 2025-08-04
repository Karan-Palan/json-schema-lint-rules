---
title: Metaschema URI must not include trailing \`#\` (Draft 2019-09+)
code: modern_official_dialect_with_empty_fragment
categories: correctness, style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
The official dialect URI of 2019-09 and newer versions must not contain the empty fragment (no trailing #).

> **Message shown to user:**
> Remove the trailing `#` from the metaschema URI.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema#",
  "type": "string"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "type": "string"
}
```
</details>

## References
* <https://json-schema.org/draft/2019-09/schema>
* <https://json-schema.org/draft/2020-12/schema>
