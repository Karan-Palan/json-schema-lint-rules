---
title: Require absolute draft URI in $schema
code: require_absolute_draft_uri
categories: correctness
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
$schema must be one of the recognised draft URLs (draft-04, draft-06, draft-07, 2019-09, 2020-12). Relative or unrecognised URIs are disallowed.

> **Message shown to user:**
> Set $schema to a absolute draft URI.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "./schema",
  "type": "string"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/schema>
* <https://json-schema.org/draft/2019-09/schema>
* <https://json-schema.org/draft-07/schema#>
