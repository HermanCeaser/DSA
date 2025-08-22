import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginJest.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
];
