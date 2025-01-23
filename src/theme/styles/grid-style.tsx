import { CSSUIObject } from "@yamada-ui/react"

export const gridStyle: Record<string, CSSUIObject> = {
  grid: {
    gap: "lg",
    marginY: "lg",
    paddingX: { "2xl": 100, base: 350, lg: 25, md: 0, xl: 50 },
    w: "full",
  },
  item: {
    w: "full",
  },
}
