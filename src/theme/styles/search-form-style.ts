import { CSSUIObject } from "@yamada-ui/react"

export const searchFormStyle: Record<string, CSSUIObject> = {
  card: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    bg: "white",
    w: "full",
  },
  button: {
    fontWeight: "normal",
    color: "gray",
    size: "xs",
    w: "fit-content",
  },
}
