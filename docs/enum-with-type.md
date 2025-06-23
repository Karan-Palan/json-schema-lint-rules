---
title: Remove \`type\` when \`enum\` is present
code: enum-with-type
categories: readability
dialects: 2019-09, 2020-12, draft4, draft6, draft7
autofixable: true
---

## Description
`enum` already restricts the allowed primitive types. A separate `type` is redundant or can even contradict the enumeration.

> **Message shown to user:**
> Delete the redundant `type` keyword (or drop `enum`).

## References
* <https://www.learnjsonschema.com/2020-12/validation/enum/>
