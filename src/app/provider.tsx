'use client'

import { theme, config } from "@/theme"
import { ColorModeScript, ThemeSchemeScript, UIProvider, colorModeManager, defaultConfig, themeSchemeManager } from "@yamada-ui/react"
import { ReactNode } from "react"

export default function Provider({
    children
}: {
    children: ReactNode
}) {
    return (
        <>
            <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
            <ThemeSchemeScript
                initialThemeScheme={config.initialThemeScheme}
            />

            <UIProvider
                theme={theme}
                colorModeManager={colorModeManager.cookieStorage}
                themeSchemeManager={themeSchemeManager.cookieStorage}
            >
                {children}
            </UIProvider>
        </>
    )
}