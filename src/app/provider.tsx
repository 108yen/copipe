'use client'

import { theme, config } from "@/theme"
import { ColorModeScript, ThemeSchemeScript, UIProvider, colorModeManager, defaultConfig, themeSchemeManager } from "@yamada-ui/react"
import { ReactNode, useEffect, useState } from "react"

export default function Provider({
    children
}: {
    children: ReactNode
}) {
    const [show_screen, setShowScreen] = useState(false)

    useEffect(() => {
        setShowScreen(true)
    }, [])

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
                {show_screen ? children : null}
            </UIProvider>
        </>
    )
}