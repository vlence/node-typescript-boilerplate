# node-typescript-boilerplate

A boilerplate for writing Node.js applications using TypeScript.

Uses ts-loader to transpile TypeScript to an ES5 compliant CommonJS module.

# HOW-TO

1. Clone this repo:
    ```bash
    git clone https://github.com/vlence/node-typescript-boilerplate.git
    ```

2. Install dependencies.
    ```bash
    npm install
    # or
    yarn install
    ```

3. Change configuration, depending on what you need,

4. Build your project. Currently only one file is outputted.
    ```bash
    npm run build
    # or
    yarn build
    ```

# TODO

1. Webpack here is automatically compiling the code to production ready, minified code. Do we really need that?

2. Only one webpack config. Do we need multiple configs for development and production? I don't know. Never came across that use case for server-side apps.
