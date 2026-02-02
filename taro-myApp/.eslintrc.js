module.exports = {
  root: true,
  extends: ['taro'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // Allow @babel/eslint-parser to run without a babel config file present
    requireConfigFile: false,
    // Point to project babel config explicitly (optional)
    babelOptions: {
      configFile: './babel.config.js'
    }
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        requireConfigFile: false
      }
    }
  ]
}

