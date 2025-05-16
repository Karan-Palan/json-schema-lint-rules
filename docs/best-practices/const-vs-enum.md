---
title: Use const instead of single-value enum
code: const-vs-enum
category: best-practices
vocabularies: https://json-schema.org/draft/2019-09/vocab/validation, https://json-schema.org/draft/2020-12/vocab/validation
---

## Description
Promote semantic clarity by replacing a one-item enum with const.

> **Message shown to user:**
> Single-value enum detected - replace with const.

## Invalid example
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [
    "foo"
  ]
}
```

## Valid example
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "const": "foo"
}
```

## References
* <https://json-schema.org/understanding-json-schema/reference/const>
