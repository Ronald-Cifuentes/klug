// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import globals from 'globals'
import js from '@eslint/js'
import path from 'node:path'
import reactPlugin from 'eslint-plugin-react'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  {
    files: ['*.cjs', '*.js', '*.jsx'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      // No es necesario declarar parser aquí, Espree es el parser por defecto
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Si quisieras poner reglas específicas para .js/.jsx, van aquí.
    },
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react: reactPlugin,
    },
    ignores: [
      './**/*.config.js',
      './coverage/**',
      './node_modules/**',
      './dist/**',
      './.yarn/**',
      './.yarn/releases/yarn-3.6.4.cjs',
      './.config/templates/**',
      './*.spec.tsx',
      './*.config.cjs',
      './metro.config.js',
      './babel.config.js',
      './jest-setup.ts',
      './eslint.config.js',
      './index.js',
    ],

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'off',
      allowImportingTsExtensions: 0,

      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreImports: true,
          ignoreDestructuring: true,
        },
      ],

      'max-len': [
        'error',
        {
          code: 180,
          comments: 180,
        },
      ],

      'max-lines-per-function': [
        'error',
        {
          max: 200,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      'max-params': ['error', 3],
      'no-await-in-loop': 'warn',
      complexity: ['error', 10],
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@nestjs/eslint-plugin-nest/use-injectable-provided-in': 'off',

      // React-specific rules
      // ...reactConfigs.recommended.rules,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      // JavaScript-specific rules
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: 'NOT_DETERMINED|DENIED|AUTHORIZED|PROVISIONAL||^_key',
        },
      ],

      // Prettier-specific rules
      'prettier/prettier': 'error',
    },
  },
]
