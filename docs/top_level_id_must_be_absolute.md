---
title: Top-level $id must be an absolute URI
code: top_level_id_must_be_absolute
categories: correctness, readability
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
Relative identifiers at the document root lead to ambiguous references. Use an absolute URI for $id.

> **Message shown to user:**
> Convert top-level $id to an absolute URI.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "/user",
  "type": "object"
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/schemas/person.json",
  "type": "object"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.8.2.1>
