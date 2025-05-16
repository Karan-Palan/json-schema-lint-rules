# jsonschema-lint-rules

A collection of lint rules for [JSON Schema](https://json-schema.org/) with metadata, examples, and documentation generation.

## Features

- **Rule Metadata**: Each rule is defined as a JSON file with a title, description, message, vocabularies, valid/invalid examples, and references.
- **Schema Validation**: All rule files are validated against a central [`rule.schema.json`](rule.schema.json).
- **Documentation Generation**: Automatically generates Markdown documentation for each rule in the `docs/` directory.
- **Best Practices**: Includes rules to promote best practices, such as preferring `const` over single-value `enum`.

## Directory Structure

```
json-schema-lint-rules/
├── docs/                # Generated Markdown documentation for rules
├── rules/               # Rule definitions organized by category
│   └── best-practices/
│       └── const-vs-enum.json
├── rule.schema.json     # JSON Schema for rule metadata
├── generate.mjs         # Script to validate rules and generate docs
├── package.json
└── .gitignore
```

## Usage

### 1. Install Dependencies

```sh
npm install
```

### 2. Validate Rules

Validate all rule files against the schema:

```sh
npm run validate:rules
```

### 3. Generate Documentation

Generate Markdown documentation for each rule:

```sh
npm run build
```

The generated docs will appear in the `docs/` directory, organized by category.

## Example Rule

See [`rules/best-practices/const-vs-enum.json`](rules/best-practices/const-vs-enum.json):

- Promotes using `const` instead of a single-value `enum`.
- Includes valid and invalid schema examples.
- Provides a user-facing message and references.

## Adding New Rules

1. Create a new JSON file in the appropriate category under `rules/`.
2. Follow the structure defined in [`rule.schema.json`](rule.schema.json).
3. Add valid and invalid examples.
4. Run validation and documentation generation scripts.
