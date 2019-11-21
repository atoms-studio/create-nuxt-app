# An opinionated Create Nuxt App

[![NPM version](https://img.shields.io/npm/v/@atoms-studio/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/@atoms-studio/create-nuxt-app)
[![NPM downloads](https://img.shields.io/npm/dm/@atoms-studio/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/@atoms-studio/create-nuxt-app)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt/create-nuxt-app/master.svg?style=flat)](https://circleci.com/gh/nuxt/create-nuxt-app/master)

## Usage

```bash
npx @atoms-studio/create-nuxt-app <my-project>
```

```bash
npm init @atoms-studio/nuxt-app <my-project>
```

```bash
yarn create @atoms-studio/nuxt-app <my-project>
```

## Main differences from the official version

* Support SCSS styles out of the box, with a default entry file in `~/assets/scss/app.scss`
* Different prompt default values:
    - Package manager: Npm (was Yarn)
    - UI framework: Tailwind CSS (was none)
    - Nuxt Modules: Axios, PWA (was none)
    - Linting tools: Eslint, Prettier, Lint stages files (was none)
    - devTools: jsconfig.json (was none)
* -y / --yes cli flag to use default options in every prompt

## Roadmap

✅Sass support out of the box<br>
✅Update prompts default values<br>
✅--yes flag<br>
✅@nuxtjs/dotenv module<br>
✅headless CMS options (Contentful, DatoCMS)<br>
⬜️ ~/store/index.js<br>
⬜️ ~/layouts/error.vue<br>
⬜️ nuxt-i18n module<br>
⬜️ nuxt-svg-loader<br>
⬜️ ~/plugins/global-components.js<br>
⬜️ netlify integration (netlify.toml, functions folder)<br>
⬜️ storybook integration<br>

---

## Official docs 
[https://github.com/nuxt/create-nuxt-app](https://github.com/nuxt/create-nuxt-app)
