---
title: Metaschema URI must not include trailing \`#\` (Draft 2019-09+)
code: metaschema_uri_extra_hash
categories: correctness, style
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
For Draft 2019-09 and 2020-12, the canonical metaschema URLs do not end with `#`. Including the fragment identifier is incorrect for these newer drafts.

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
