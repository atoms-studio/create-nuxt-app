const { random } = require('superb')

module.exports = [
  {
    name: 'name',
    message: 'Project name',
    default: '{outFolder}'
  },
  {
    name: 'description',
    message: 'Project description',
    default: `My ${random()} Nuxt.js project`
  },
  {
    name: 'author',
    type: 'string',
    message: 'Author name',
    default: 'atoms (https://atoms.studio)'
  },
  {
    name: 'pm',
    message: 'Choose the package manager',
    choices: [
      { name: 'Yarn', value: 'yarn' },
      { name: 'Npm', value: 'npm' }
    ],
    type: 'list',
    default: 'yarn'
  },
  {
    name: 'ui',
    message: 'Choose UI framework',
    type: 'list',
    pageSize: 15,
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Ant Design Vue', value: 'ant-design-vue' },
      { name: 'Bootstrap Vue', value: 'bootstrap' },
      { name: 'Buefy', value: 'buefy' },
      { name: 'Bulma', value: 'bulma' },
      { name: 'Element', value: 'element-ui' },
      { name: 'Framevuerk', value: 'framevuerk' },
      { name: 'iView', value: 'iview' },
      { name: 'Tachyons', value: 'tachyons' },
      { name: 'Tailwind CSS', value: 'tailwind' },
      { name: 'Vuesax', value: 'vuesax' },
      { name: 'Vuetify.js', value: 'vuetify' }
    ],
    default: 'tailwind'
  },
  {
    name: 'server',
    message: 'Choose custom server framework',
    type: 'list',
    pageSize: 10,
    choices: [
      { name: 'None (Recommended)', value: 'none' },
      { name: 'AdonisJs', value: 'adonis' },
      { name: 'Express', value: 'express' },
      { name: 'Fastify', value: 'fastify' },
      { name: 'Feathers', value: 'feathers' },
      { name: 'hapi', value: 'hapi' },
      { name: 'Koa', value: 'koa' },
      { name: 'Micro', value: 'micro' }
    ],
    default: 'none'
  },
  {
    name: 'features',
    message: 'Choose Nuxt.js modules',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'Axios', value: 'axios' },
      { name: 'Progressive Web App (PWA) Support', value: 'pwa' },
      { name: 'DotEnv', value: 'dotenv' },
      { name: 'Nuxt i18n', value: 'i18n' }
    ],
    default: ['axios', 'pwa', 'dotenv', 'i18n']
  },
  {
    name: 'linter',
    message: 'Choose linting tools',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'ESLint', value: 'eslint' },
      { name: 'Prettier', value: 'prettier' },
      { name: 'Lint staged files', value: 'lintStaged' },
      { name: 'StyleLint', value: 'stylelint' }
    ],
    default: ['eslint', 'prettier', 'lintStaged']
  },
  {
    name: 'test',
    message: 'Choose test framework',
    type: 'list',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Jest', value: 'jest' },
      { name: 'AVA', value: 'ava' }
    ],
    default: 'none'
  },
  {
    name: 'mode',
    message: 'Choose rendering mode',
    type: 'list',
    choices: [
      { name: 'Universal (SSR)', value: 'universal' },
      { name: 'Single Page App', value: 'spa' }
    ],
    default: 'universal'
  },
  {
    name: 'devTools',
    message: 'Choose development tools',
    type: 'checkbox',
    choices: [
      { name: 'jsconfig.json (Recommended for VS Code)', value: 'jsconfig.json' },
      { name: 'Standardversion + Commitlint', value: 'standardversion' },
      { name: 'Semantic Pull Requests', value: 'semantic-pull-requests' }
    ],
    default: ['jsconfig.json', 'standardversion']
  },
  {
    name: 'hlcms',
    message: 'Choose your Headless CMS',
    type: 'list',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'DatoCMS', value: 'datocms' },
      { name: 'Contentful', value: 'contentful' }
    ],
    default: 'none'
  }
]
