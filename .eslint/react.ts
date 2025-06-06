import { Linter } from "eslint"
import reactPlugin from "eslint-plugin-react"
import { sharedFiles } from "./shared"

export const reactConfig: Linter.Config = {
  files: sharedFiles,
  name: "eslint/react",
  plugins: {
    react: reactPlugin,
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    "react/jsx-uses-react": "off", // React 17+ does not require React to be in scope
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "react/react-in-jsx-scope": "off", // React 17+ does not require React to be in scope
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
