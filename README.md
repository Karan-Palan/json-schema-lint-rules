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

### 2. Generate Documentation & Validate Rules

Run the documentation generator and validate JSON files:

```sh
node generate.mjs
```

This will validate all rules against `rule.schema.json` and generate Markdown documentation in the `docs/` directory.

You can also validate rules separately:

```sh
npm run validate:rules
```

### 3. Development Setup

The project includes a pre-commit hook that automatically formats JSON schema files using `jsonschema fmt`. This runs automatically when you make a commit that includes changes to:
- `rule.schema.json`
- Any files in the `rules/` directory

To set up the pre-commit hook (already configured in the project):

```sh
npm install
```

The hook will automatically run when you make commits that include changes to JSON schema files.

### 4. Generate Documentation

Generate Markdown documentation for each rule:

```sh
npm run build
```

The generated docs will appear in the `docs/` directory, organized by category.

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

## Adding New Rules

1. Create a new JSON file in the appropriate category under `rules/`.
2. Follow the structure defined in [`rule.schema.json`](rule.schema.json).
3. Add before and after examples.
4. Run validation and documentation generation scripts.
