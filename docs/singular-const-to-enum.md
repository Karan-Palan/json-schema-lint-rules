---
title: Replace single-value enum with const
code: singular-const-to-enum
categories: modernize, readability
dialects: 2019-09, 2020-12
autofixable: true
---

## Description
An enum with exactly one element can be expressed more clearly with const.

> **Message shown to user:**
> Single-value enum detected – replace with const.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [
    "foo"
  ]
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "const": "foo"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/const>
