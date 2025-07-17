---
title: Use \`$comment\` for actionable notes, not \`title\` / \`description\`
code: no_actionable_text_in_title_description
categories: readability, style
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`title` and `description` are user-facing annotations. Action items such as “TODO”, “FIXME”, or implementation instructions belong in `$comment`.

> **Message shown to user:**
> Move actionable text to `$comment`.

### Example 1
<details><summary>Before</summary>

```json
{
  "title": "TODO: refine schema later",
  "description": "FIXME — confirm with backend team"
}
```
</details>

<details><summary>After</summary>

```json
{
  "title": "User object",
  "description": "Represents an application user",
  "$comment": "TODO: refine schema later · FIXME — confirm with backend team"
}
```
</details>

## References
* <https://json-schema.org/understanding-json-schema/reference/generic.html#annotations>
