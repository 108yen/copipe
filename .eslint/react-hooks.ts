import { fixupPluginRules } from "@eslint/compat"
import { Linter } from "eslint"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/react-hooks",
  plugins: {
    "react-hooks": fixupPluginRules(reactHooksPlugin),
  },
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,
  },
}
