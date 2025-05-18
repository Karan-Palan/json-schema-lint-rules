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
├── rules/               # Rule definitions organized 
├── .dockerignore
├── Dockerfile
├── LICENSE
├── rule.schema.json    # JSON Schema for rule metadata
├── generate.mjs        # Script to validate rules and generate docs
├── package.json
├── package-lock.json
└── .gitignore
```

## Usage

### 1. Install Dependencies

```sh
npm install
```

### 2. Generate Documentation

Run the documentation generator and validate json files:

```sh
node generate.mjs
```

This will validate all rules against `rule.schema.json` and generate Markdown documentation in the `docs/` directory.

### 2. Validate Rules

Validate all rule files against the schema:

```sh
npm run validate:rules
```

### Docker Usage

You can use Docker to build and run this project without installing Node.js locally.

### 1. Build the Docker Image

```sh
docker build -t jsonschema-lint-rules .
```

### 2. Run the Generator

```sh
docker run --rm -v $(pwd):/app jsonschema-lint-rules
```

This will execute the documentation generator inside a container. The output will appear in the `docs/` directory of your local project.

### Notes
- The Dockerfile and .dockerignore are provided for convenience.
- You can override the default command if needed, e.g.:
  ```sh
  docker run --rm -v $(pwd):/app jsonschema-lint-rules npm run validate:rules
  ```

### 3. Generate Documentation

Generate Markdown documentation for each rule:

```sh
npm run build
```

The generated docs will appear in the `docs/` directory, organized by category.

## Example Rule

See [`rules/singular-const-to-enum.json`](rules/singular-const-to-enum.json):

- Promotes using `const` instead of a single-value `enum`.
- Includes valid and invalid schema examples.
- Provides a user-facing message and references.

## Adding New Rules

1. Create a new JSON file in the appropriate category under `rules/`.
2. Follow the structure defined in [`rule.schema.json`](rule.schema.json).
3. Add before and after examples.
4. Run validation and documentation generation scripts.
