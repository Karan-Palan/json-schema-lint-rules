---
title: Use $defs over definitions in 2019-09 + drafts
code: modernize-definitions-to-$defs
categories: correctness, readability
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
`definitions` is superseded by `$defs` starting in draft-2019-09. Migrate to `$defs` for forward compatibility.

> **Message shown to user:**
> Move schemas from `definitions` to `$defs`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": {
      "$ref": "#/definitions/uuid"
    }
  },
  "definitions": {
    "uuid": {
      "type": "string",
      "format": "uuid"
    }
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": {
      "$ref": "#/$defs/uuid"
    }
  },
  "$defs": {
    "uuid": {
      "type": "string",
      "format": "uuid"
    }
  }
}
```
</details>

## References
* <https://json-schema.org/draft/2019-09/release-notes#definitions>
