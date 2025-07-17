---
title: Metaschema URI must include trailing \`#\`
code: metaschema_uri_missing_hash
categories: correctness, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
The canonical metaschema URLs end with `schema#`. Omitting the fragment identifier can confuse tooling and may bypass caching.

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
