module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    <%_ if (server === 'adonis') { _%>
    use: true
    <%_ } _%>
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    <%_ if (prettier) { _%>
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    <%_ } _%>
    'plugin:nuxt/recommended'
  ],
  <%_ if (prettier) { _%>
  plugins: [
    'prettier'
  ],
  <%_ } _%>
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    <%_ if (!esm){ _%>
    'nuxt/no-cjs-in-config': 'off'
    <%_ } _%>
  }
}
