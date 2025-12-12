---
title: Prefix unknown keywords with x-
code: unknown_keywords_prefix
categories: correctness, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
Future versions of JSON Schema will refuse to evaluate unknown keywords or custom keywords from optional vocabularies that don't have an x- prefix.

> **Message shown to user:**
> Prefix unknown keyword(s) with "x-".

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "fooBar": true
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "x-fooBar": true,
  "type": "object"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.4.4.4>
