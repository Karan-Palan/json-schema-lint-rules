---
title: Metaschema URI must include trailing \`#\` (Draft 4-7)
code: draft_official_dialect_without_empty_fragment
categories: correctness, style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
The official dialect URI of Draft 7 and older versions must include the trailing `#` fragment (e.g. `…schema#`).

> **Message shown to user:**
> Append a trailing `#` to the metaschema URI.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "string"
}
```
</details>

## References
* <https://json-schema.org/draft-07/schema#>
