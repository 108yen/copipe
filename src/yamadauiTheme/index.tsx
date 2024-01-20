import { extendTheme, UsageTheme } from "@yamada-ui/react"
import { semantics } from "./semantics"
import styles from './styles'
// import components from './components'

const customTheme: UsageTheme = {
    styles,
    semantics,
}

export default extendTheme(customTheme)()