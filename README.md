# Cicerchie UI

A set of web components for building **fast** user interfaces.<br><br>

![Release](https://github.com/cicerchie/ui/workflows/Release/badge.svg?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

### <span style="color:red">WARNING!</span>

These components are still "experimental" (`v0.x.x`).<br>
Some of them are not tested as rigourously as it should be and none of them have been through code review.<br>
Use them at your own risk and check that them do what you want them to do.

---

## Demo

COMING SOON (with Storybook and not).

## Getting started

1. `npm install -D @cicerchie/ui`

1. [TailwindCSS](https://tailwindcss.com) (^v1) is used for styling. For now [it must be added manually in the project](https://tailwindcss.com/docs/installation).<br>_We are planning to make available in the future an optional version of each component that already contains the CSS needed for it to work._

1. Import the components you need, like this:

```html
<script>
  import { Button, InputText } from "@cicerchie/ui";
</script>

<Button>I'm the Button!</Button>
<InputText placeholder="I'm the Input!" />
```

### Consuming components in a **Svelte 3 project**

Svelte apps can import components source code directly if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader).

### Consuming components in **any JavaScript project**

You can import components using plain JavaScript module or UMD.

### Consuming components as **Web Components**

COMING SOON.

## Changelog

Is automagically updated with each release and [you can read it here](https://github.com/cicerchie/ui/blob/master/CHANGELOG.md).

## StandardJS and Visual Studio Code

We love [StandardJS](https://standardjs.com) and we're using it for this project.

If you clone the project and open it in VS Code everything is already in place.<br>
If you install suggested extensions you can **format** and **format-on-save** in StandardJS.

---

### Built (for now) with

- ♥ Love
- [Svelte 3](https://svelte.dev)
- [TailwindCSS](https://tailwindcss.com)

### Inspired (for now) by

- ♥ Love
- [Shoelace](https://shoelace.style)
- [Bootstrap](https://getbootstrap.com)