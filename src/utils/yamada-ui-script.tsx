"use client"

import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"
import { config } from "@/theme"

export function YamadaUIScript() {
  const { initialColorMode, initialThemeScheme } = { ...config }

  return (
    <>
      <ColorModeScript initialColorMode={initialColorMode} />
      <ThemeSchemeScript initialThemeScheme={initialThemeScheme} />
    </>
  )
}
