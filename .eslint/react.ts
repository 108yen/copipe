import reactPlugin from "@eslint-react/eslint-plugin"
import { Linter } from "eslint"
import { sharedFiles } from "./shared"

const { plugins, rules, settings } = reactPlugin.configs.recommended

export const reactConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/react",
  plugins,
  rules,
  settings,
}
