# Delgada CLI

The command line interface and standard tooling used for Delgada development.

## Getting started

```bash
npm install -D @delgada/cli
```

Alternatively, use the [Delgada template](https://github.com/delgada-ui/template) as a jumping off point for new Delgada projects.

## Basic usage

Currently, the CLI has only implemented the `build` command.

The build command is responsible for compiling Delgada source code and building output HTML, CSS, and JavaScript files.

The command has two optional flags:

- `-e, --entry <path>`: set entrypoint directory (default: "./src")
- `-b, --build <path>`: set build directory (default: "./build")

The expected usage of this command is to be wrapped as an NPM build script inside `package.json`.

```json
"scripts": {
  "build": "delgada build"
}
```

## License

[MIT](./LICENSE)
