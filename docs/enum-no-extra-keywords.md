---
title: Avoid combining enum with other validation keywords
code: enum-no-extra-keywords
categories: correctness, readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`enum` fully defines allowed values; adding type/length/number constraints is redundant and can even contradict the enum.

> **Message shown to user:**
> Remove complementary validation keywords when an enum is present.

### Example 1
<details><summary>Before</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
  "enum": [
    "one",
    "two"
  ],
  "minLength": 3
}
```
</details>

<details><summary>After</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [
    "one",
    "two"
  ]
}
```
</details>

## References
* <https://github.com/orgs/json-schema-orgs/discussions/323#discussioncomment-4898765>
