import { fixupPluginRules } from "@eslint/compat"
import pluginNext from "@next/eslint-plugin-next"
import { Linter } from "eslint"
import { sharedFiles } from "./shared"

export const nextConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/next",
  plugins: {
    "@next/next": fixupPluginRules(pluginNext),
  },
  rules: {
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs["core-web-vitals"].rules,
  },
}
