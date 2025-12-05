import { Linter } from "eslint"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/react-hooks",
  plugins: {
    "react-hooks": reactHooksPlugin as any,
  },
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
}
