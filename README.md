# Vue3-Ts-H5-Template

This template should help get you started developing with Vue 3 in Vite.
And continue to add and update simple examples of plug-ins.

## Plugins

[axios](https://axios-http.com/docs/intro): Promise based HTTP client for the browser and node.js.<br />
[pinia](https://pinia.vuejs.org/zh/introduction.html): Intuitive, type safe and flexible Store for Vue.<br />
[pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/#vue3): Persist VueJs Pinia state data in sessionStorage or other storages.<br />
[vant](https://vant-ui.github.io/vant/#/en-US): Mobile UI Components built on Vue.<br />
[vue-i18n](https://vue-i18n.intlify.dev/): Internationalization plugin for Vue.js.<br />
[vue-router](https://router.vuejs.org/installation.html): The official Router for Vue.js.<br />
[postcss-pxtorem](https://github.com/cuth/postcss-pxtorem): A CSS post-processor that converts px to rem.<br />
[amfe-flexible]():Build flexible page on mobile platform.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
