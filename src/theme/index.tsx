import { extendConfig, extendTheme, UsageTheme } from "@yamada-ui/react"
import { semantics } from "./semantics"
import styles from './styles'
import { customConfig } from "./config"

const customTheme: UsageTheme = {
    styles,
    semantics,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

export default theme
