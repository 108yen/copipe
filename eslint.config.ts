import { TSESLint } from "@typescript-eslint/utils"
import { Linter } from "eslint"
import prettierConfig from "eslint-config-prettier"
import typegen from "eslint-typegen"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  cspellConfig,
  importConfigArray,
  jsxA11yConfig,
  languageOptionFactory,
  nextConfig,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  typescriptConfig,
} from "./.eslint"

const ignoresConfig: Linter.Config = {
  ignores: [
    "**/.next/**",
    "**/.turbo/**",
    "**/dist/**",
    "**/@types/**",
    "**/node_modules/**",
    "**/build/**",
    "**/playwright-report/**",
    "**/pnpm-lock.yaml",
    "**/.eslintcache",
  ],
  name: "eslint/ignores",
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const languageOptionConfig = languageOptionFactory(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ignoresConfig,
  cspellConfig,
  languageOptionConfig,
  ...importConfigArray,
  perfectionistConfig,
  typescriptConfig,
  reactConfig,
  jsxA11yConfig,
  reactHooksConfig,
  nextConfig,
  prettierConfig,
  baseConfig,
)

export default typegen(config as Linter.Config[], {
  dtsPath: "./@types/eslint-typegen.d.ts",
})
