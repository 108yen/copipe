"use client";
import { config } from "@/theme";
import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react";

export default function UIScript() {
  return (
    <>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      <ThemeSchemeScript initialThemeScheme={config.initialThemeScheme} />
    </>
  );
}
