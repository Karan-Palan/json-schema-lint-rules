---
title: \`then\` without \`if\` is ignored
code: then-without-if
categories: correctness
dialects: 2019-09, 2020-12, draft7
autofixable: true
---

## Description
`then` has effect only when paired with `if`. Without `if` it can be removed.

> **Message shown to user:**
> Remove `then` because there is no matching `if`.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "then": {
    "required": [
      "foo"
    ]
  }
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema"
}
```
</details>

## References
* <https://json-schema.org/draft/2020-12/json-schema-core.html#name-conditionals>
