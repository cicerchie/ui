# Cicerchie UI

A set of web components for building **fast** user interfaces.<br><br>

![Release](https://github.com/cicerchie/ui/workflows/Release/badge.svg?branch=master)

---

### <span style="color:red">WARNING!</span>

These components are still "experimental" (`v0.x.x`).<br>
Some of them are not tested as rigourously as it should be and none of them have been through code review.<br>
Use them at your own risk and check that them do what you want them to do.

---

## Demo

[Explore the Storybook](https://cicerchie.github.io/ui)

## Getting started

1.  `npm install -D @cicerchie/ui`

1.  [TailwindCSS](https://tailwindcss.com) (^v1.8.5) is used for styling. For now [it must be added manually in the project](https://tailwindcss.com/docs/installation).<br>
    Use this code in your project's **tailwind.config.js**:

    ```js
    const resolveConfig = require("tailwindcss/resolveConfig");
    const cicerchieUITailwindConfig = require("@cicerchie/ui/tailwind.config");

    module.exports = resolveConfig(
      {
        // your optional Tailwind config here...
      },
      cicerchieUITailwindConfig
    );
    ```

    _We are planning to make available in the future an optional version of each component that already contains the CSS needed for it to work._

1.  Import the components you need, like this:

    ```svelte
    <script>
      import { Button, InputText } from "@cicerchie/ui";
    </script>

    <Button>I'm the Button!</Button>
    <InputText placeholder="I'm the Input!" />
    ```

### Consuming components in a **Svelte 3 project**

Svelte apps can import components source code directly if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader).

_NOTE: From `0.1.x` it only works in a Svelte Typescript project._

### Consuming components in **any JavaScript project**

You can import components using plain JavaScript module or UMD.

### Consuming components as **Web Components**

COMING SOON.

## Changelog

Is automagically updated with each release and [you can read it here](https://github.com/cicerchie/ui/blob/master/CHANGELOG.md).

---

### Built (for now) with:

- ♥ Love
- [Svelte 3](https://svelte.dev)
- [TailwindCSS](https://tailwindcss.com)
