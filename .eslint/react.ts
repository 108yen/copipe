import reactPlugin from "@eslint-react/eslint-plugin"
import { Linter } from "eslint"
import { sharedFiles } from "./shared"

export const reactConfig: Linter.Config = {
  ...(reactPlugin.configs.recommended as unknown as Linter.Config),
  files: sharedFiles,
  name: "eslint/react",
}
