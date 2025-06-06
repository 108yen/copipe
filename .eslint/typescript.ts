import { TSESLint } from "@typescript-eslint/utils"
import { configs, plugin } from "typescript-eslint"
import { sharedFiles } from "./shared"

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  files: sharedFiles,
  name: "eslint/typescript",
  plugins: {
    "@typescript-eslint": plugin,
  },
  rules: {
    ...configs.recommended[1].rules,
    ...configs.stylistic[2].rules,
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions"],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
}
