import antfu from '@antfu/eslint-config';
import tailwind from 'eslint-plugin-better-tailwindcss';

const config = antfu(
  {
    type: 'app',
    typescript: true,
    react: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: 'single',
    },
  },
  {
    rules: {
      'ts/no-redeclare': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
      'perfectionist/sort-imports': [
        'error',
        {
          tsconfig: {
            rootDir: '.',
          },
        },
      ],
      'unicorn/filename-case': ['error', {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
        ignore: ['README.md', 'CHANGELOG.md', 'LICENSE', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md'],
      }],
      'toml/indent': ['error', 2, { subTables: 1, keyValuePairs: 1 }],
      'react-refresh/only-export-components': [
        'error',
        {
          allowExportNames: ['meta', 'links', 'headers', 'loader', 'action', 'clientLoader', 'clientAction'],
        },
      ],
    },
  },
  {
    files: ['**/*.{jsx,tsx,css}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'better-tailwindcss': tailwind,
    },
    rules: {
      // enable all recommended rules to report a warning
      ...tailwind.configs['recommended-warn'].rules,
      // enable all recommended rules to report an error
      ...tailwind.configs['recommended-error'].rules,

      // or configure rules individually
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 180 }],
      'better-tailwindcss/enforce-consistent-class-order': ['warn'],
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'app/styles/tailwind.css',
      },
    },
  },
);

export default config;
