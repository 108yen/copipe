import eslint from "@eslint/js"
import { Linter } from "eslint"
import { sharedFiles } from "./shared"

export const baseConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/base",
  rules: {
    ...eslint.configs.recommended.rules,
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
}
