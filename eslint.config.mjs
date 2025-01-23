import cspellPlugin from "@cspell/eslint-plugin"
import { fixupPluginRules } from "@eslint/compat"
import eslint from "@eslint/js"
import pluginNext from "@next/eslint-plugin-next"
import pluginImport from "eslint-plugin-import"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import perfectionist from "eslint-plugin-perfectionist"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import {
  config as tseslintConfig,
  configs as tseslintConfigs,
  parser as tseslintParser,
  plugin as tseslintPlugin,
} from "typescript-eslint"

/** @typedef {import("typescript-eslint").ConfigWithExtends} TSESLintConfig */

/** @type {{js: string[], ts: string[], all: string[]}} */
const sourceFilePaths = {
  all: [
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.cts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.d.ts",
  ],
  js: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx"],
  ts: ["**/*.ts", "**/*.cts", "**/*.mts", "**/*.tsx", "**/*.d.ts"],
}

/** @type {Pick<TSESLintConfig, "name" | "ignores">} */
const ignoreTSESConfig = {
  ignores: [".next/**", "node_modules/**", "**/pnpm-lock.yaml", ".eslintcache"],
  name: "ignores/base",
}

/** @type {Pick<TSESLintConfig, "name" | "languageOptions">} */
const languageOptionTSESConfig = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2025,
    },
    parser: tseslintParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2025,
      sourceType: "module",
    },
  },
  name: "language-options/base",
}

const allSourceFileExtensions = [
  ".js",
  ".cjs",
  ".mjs",
  ".jsx",
  ".ts",
  ".cts",
  ".mts",
  ".tsx",
  ".d.ts",
]

/** @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules" | "settings">} */
const importTSESConfig = {
  files: sourceFilePaths.all,
  name: "import/base",
  plugins: {
    import: fixupPluginRules(pluginImport),
    "unused-imports": pluginUnusedImports,
  },
  rules: {
    ...pluginImport.configs.recommended.rules,
    ...pluginImport.configs.typescript.rules,
    "import/namespace": "off",

    // Set of `import` rules that existed in `eslint-config-next`.
    "import/no-anonymous-default-export": "error",
    // These rules existed in the `.eslintrc`.
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": allSourceFileExtensions,
    },
    "import/resolver": {
      node: {
        extensions: allSourceFileExtensions,
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}

/** @type {Pick<TSESLintConfig, "name" | "files" | "rules">} */
const eslintTSESConfig = {
  files: sourceFilePaths.all,
  name: "eslint/base",
  rules: {
    ...eslint.configs.recommended.rules,
    "no-empty": ["error", { allowEmptyCatch: true }],
  },
}

/** @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules">[]} */
const typescriptTSESConfigArray = [
  {
    files: sourceFilePaths.all,
    name: "typescript/base",
    plugins: {
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      ...tseslintConfigs.recommended
        .filter((config) => config.rules !== undefined)
        .reduce((acc, config) => ({ ...acc, ...config.rules }), {}),

      ...tseslintConfigs.stylistic
        .filter((config) => config.rules !== undefined)
        .reduce((acc, config) => ({ ...acc, ...config.rules }), {}),

      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/ban-types": "off",
      // If you want to unify the type definition method to either `type` or `interface`, you can enable this rule.
      // https://typescript-eslint.io/rules/consistent-type-definitions
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
    },
  },

  // These rules existed in the `.eslintrc`.
  {
    files: sourceFilePaths.js,
    name: "typescript/disabled-in-js",
    plugins: {
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },
]

/** @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules" | "settings">} */
const reactTSESConfig = {
  files: sourceFilePaths.all,
  name: "react/base",
  plugins: {
    react: pluginReact,
  },
  rules: {
    ...pluginReact.configs.recommended.rules,

    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-target-blank": "off",
    // These rules existed in the `.eslintrc`.
    "react/no-unescaped-entities": "off",
    // Set of `react` rules that existed in `eslint-config-next`.
    "react/no-unknown-property": "off",

    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}

/** @type {Pick<TSESLintConfig, "name | "files" | "plugins" | "rules">} */
const reactHooksTSESConfig = {
  files: sourceFilePaths.all,
  name: "react-hooks/base",
  plugins: {
    "react-hooks": fixupPluginRules(pluginReactHooks),
  },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
  },
}

/** @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules">} */
const nextTSESConfig = {
  files: sourceFilePaths.all,
  name: "next/base",
  plugins: {
    "@next/next": fixupPluginRules(pluginNext),
  },
  rules: {
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs["core-web-vitals"].rules,

    // These rules existed in the `.eslintrc`.
    "@next/next/no-assign-module-variable": "off",
    "@next/next/no-title-in-document-head": "off",
  },
}

/**
 * @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules">}
 * @description Set of `jsx-a11y` rules existed in `eslint-config-next`.
 */
const jsxA11yTSESConfig = {
  files: sourceFilePaths.all,
  name: "jsx-a11y/base",
  plugins: {
    "jsx-a11y": pluginJsxA11y,
  },
  rules: {
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
  },
}

/**
 * @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules">}
 */
const prettierTSESConfig = {
  files: sourceFilePaths.all,
  name: "prettier/base",
  plugins: {
    react: pluginReact,
  },
  rules: {
    curly: "off",
    "no-unexpected-multiline": "off",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
  },
}

/** @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules" | "settings">} */
const sortTSESConfig = {
  files: sourceFilePaths.all,
  name: "sort/base",
  plugins: {
    perfectionist,
  },
  rules: {
    ...perfectionist.configs["recommended-natural"].rules,
    "perfectionist/sort-modules": [
      "error",
      {
        groups: [
          "declare-enum",
          "export-enum",
          "enum",
          ["declare-interface", "declare-type"],
          ["export-interface", "export-type"],
          "declare-class",
          "class",
          "export-class",
          "declare-function",
        ],
      },
    ],
  },
}

/** @type {Pick<TSESLintConfig, "name" | "files" | "plugins" | "rules" | "settings">} */
const cspellConfig = {
  files: sourceFilePaths.all,
  ignores: ["src/app/not-found.tsx"],
  name: "cspell/base",
  plugins: {
    "@cspell": cspellPlugin,
  },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        configFile: new URL('./cspell.json', import.meta.url).toString(),
      },
    ],
  },
}

export default tseslintConfig(
  ignoreTSESConfig,
  languageOptionTSESConfig,
  eslintTSESConfig,
  ...typescriptTSESConfigArray,
  importTSESConfig,
  nextTSESConfig,
  reactTSESConfig,
  reactHooksTSESConfig,
  jsxA11yTSESConfig,
  prettierTSESConfig,
  sortTSESConfig,
  cspellConfig,
)
