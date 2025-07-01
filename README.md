# JSON Schema Lint Rules

> A **linter‑agnostic** catalogue of machine‑readable JSON Schema quality rules.

---

## Why does this exist?

Working with large JSON Schemas (OpenAPI, AsyncAPI, event contracts, etc.) gets messy fast. Most linters ship with a fixed set of checks and the logic hard‑codes the rules. By extracting the rules into a standalone catalogue:

* **Any linter** – written in Java, Go, Rust, or even Bash – can consume the *same* rule set simply by reading these JSON documents.
* Rule authors focus on *declarative* constraints rather than imperative code.
* CI pipelines can upgrade, pin, or diff rule versions without rebuilding the engine.

## Repo layout

```
json-schema-lint-rules/
├── rules/          # ★ Machine‑readable rule manifests (JSON)
├── docs/           # Auto‑generated, human‑friendly Markdown docs
├── rule.schema.json# JSON Schema describing the rule manifest format
├── generate.mjs    # Script that turns rules/* into docs/*
├── .github/workflows/rule-docs.yml  # CI job to (re)generate docs on push
├── package.json    # Dev scripts (validation, doc gen, release helpers)
└── ...
```

### Rule manifest shape

Each file in `rules/` is a **single JSON object** that must validate against [`rule.schema.json`](./rule.schema.json). **No extra properties** are allowed – the meta‑schema rejects them.

| Key           | Type      | Required | Notes                                                                                         |
| ------------- | --------- | -------- | --------------------------------------------------------------------------------------------- |
| `title`       | string    | ✅        | Short, imperative headline for humans and UIs.                                                |
| `description` | string    | ✅        | One‑paragraph explanation of what the rule checks and why it matters.                         |
| `message`     | string    | ✅        | Error message template emitted by the linter.                                                 |
| `categories`  | string\[] | ✅        | One or more of `readability`, `correctness`, `performance`, `safety`, `style`, `opinionated`. |
| `dialects`    | object    | ✅        | Map of JSON Schema draft → array of keywords touched by the rule.                             |
| `examples`    | object\[] | ✅        | Example pairs: each item must have `before` (invalid schema); `after` is optional.            |
| `references`  | string\[] | ❌        | Optional list of URLs to spec sections or external write‑ups.                                 |



## Developing & validating rules

1. **Install deps**

   ```bash
   npm install
   ```
2. **Validate all rule manifests**

   ```bash
   npm run validate:rules
   ```

   This command must exit **non‑zero** on any schema violation.
3. **Regenerate docs**

   ```bash
   npm run build
   ```

   The CI workflow does the same on every push.

## Contributing

* **Fix or add a rule** – create `<slug>.json` in `rules/` and run `npm run validate:rules`.
* **Docs** are generated; never edit files in `docs/` by hand.
* Open a PR. CI will fail if your manifest breaks the schema or if docs are stale.


## License

[MIT](./LICENSE)

---