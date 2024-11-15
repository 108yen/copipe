"use client"

import { config } from "@/theme"
import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"

export function YamadaUIScript() {
  const { initialColorMode, initialThemeScheme } = { ...config }

  return (
    <>
      <ColorModeScript initialColorMode={initialColorMode} />
      <ThemeSchemeScript initialThemeScheme={initialThemeScheme} />
    </>
  )
}
