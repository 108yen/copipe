import { ComponentStyle } from "@yamada-ui/react"

export const Container: ComponentStyle = {
  baseStyle: {
    bg: "white",
    display: "flex",
    flexDirection: "column",
    gap: { base: "lg", sm: "md" },
    p: { base: "lg", sm: "md" },
    rounded: "xl",
    w: "100%",
  },
}
