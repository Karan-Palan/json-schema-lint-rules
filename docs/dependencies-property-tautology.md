---
title: Remove empty property lists in \`dependencies\`
code: dependencies-property-tautology
categories: style
dialects: draft4, draft6, draft7
autofixable: true
---

## Description
A `dependencies` entry with an empty array never changes validation; it is redundant.

> **Message shown to user:**
> Delete tautological dependency arrays.

### Example 1
<details><summary>Before</summary>
```json
{
  "dependencies": {
    "foo": []
  }
}
```
</details>

<details><summary>After</summary>
```json
{
  "{}": {}
}
```
</details>

## References
* <https://json-schema.org/draft-07/json-schema-validation.html#dependencies>
