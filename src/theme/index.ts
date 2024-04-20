"use client"
import { extendConfig, extendTheme, UsageTheme } from "@yamada-ui/react"
import { semantics } from "./semantics"
import styles from "./styles"
import { customConfig } from "./config"
import components from "./components"
import tokens from "./tokens"

const customTheme: UsageTheme = {
    styles,
    components,
    semantics,
    ...tokens,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

export default theme
