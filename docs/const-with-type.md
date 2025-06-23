---
title: Remove \`type\` when \`const\` is present
code: const-with-type
categories: readability
dialects: 2019-09, 2020-12, draft6, draft7
autofixable: true
---

## Description
`const` fixes the instance to a single value, which already determines its primitive type.

> **Message shown to user:**
> Delete the redundant `type` keyword (or drop `const`).

## References
* <https://www.learnjsonschema.com/2020-12/validation/const/>
