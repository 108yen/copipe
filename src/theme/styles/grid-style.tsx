import { CSSUIObject } from "@yamada-ui/react"

export const gridStyle: Record<string, CSSUIObject> = {
  grid: {
    gap: "lg",
    w: "full",
    paddingX: { base: 350, "2xl": 100, xl: 50, lg: 25, md: 0 },
    marginY: "lg",
  },
  item: {
    w: "full",
  },
}
