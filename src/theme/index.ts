"use client"
import { extendConfig, extendTheme, UsageTheme } from "@yamada-ui/react"

import components from "./components"
import { customConfig } from "./config"
import { semantics } from "./semantics"
import { styles } from "./styles"
import { tokens } from "./tokens"

const customTheme: UsageTheme = {
  components,
  semantics,
  styles,
  ...tokens,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)
