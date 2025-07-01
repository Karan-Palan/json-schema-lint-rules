---
title: Do not use $defs before draft-2019-09
code: defs-not-supported-pre-2019-09
categories: correctness, readability
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
$defs was introduced in draft-2019-09. For draft-04/06/07 use the legacy `definitions` keyword instead.

> **Message shown to user:**
> Replace `$defs` with `definitions`, and update any `$ref`s that target it.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/$defs/uuid",
  "$defs": {
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
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/uuid",
  "definitions": {
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
