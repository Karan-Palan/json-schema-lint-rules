---
title: Equal numeric bounds can be expressed with \`const\`
code: equal-numeric-bounds-to-const
categories: style, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`minimum` == `maximum` forces one exact value; use `const` for clarity.

> **Message shown to user:**
> Replace equal numeric bounds with `const`.

### Example 1
<details><summary>Before</summary>

```json
{
  "maximum": 5,
  "minimum": 5
}
```
</details>

<details><summary>After</summary>

```json
{
  "const": 5
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/numeric.html#range>
