import cspellPlugin from "@cspell/eslint-plugin"
import { Linter } from "eslint"
import cspellJson from "../cspell.json"
import { sharedFiles } from "./shared"
export const cspellConfig: Linter.Config = {
  files: sharedFiles,
  ignores: cspellJson.ignorePaths,
  name: "eslint/cspell",
  plugins: { "@cspell": cspellPlugin },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        autoFix: false,
        configFile: new URL("../cspell.json", import.meta.url).toString(),
        cspell: {},
        generateSuggestions: true,
        numSuggestions: 5,
      },
    ],
  },
}
