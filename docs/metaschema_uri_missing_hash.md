---
title: Metaschema URI must include trailing \`#\` (Draft 4-7)
code: metaschema_uri_missing_hash
categories: correctness, style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
For Draft 4, 6, and 7, the canonical metaschema URLs end with `schema#`. Omitting the fragment identifier can confuse tooling and may bypass caching.

> **Message shown to user:**
> Append a trailing `#` to the metaschema URI (e.g. …`schema#`).

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
