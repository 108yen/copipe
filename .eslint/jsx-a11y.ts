import { Linter } from "eslint"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import { sharedFiles } from "./shared"

export const jsxA11yConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/jsx-a11y",
  plugins: {
    "jsx-a11y": jsxA11yPlugin,
  },
  rules: {
    ...jsxA11yPlugin.configs.recommended.rules,
  },
}
