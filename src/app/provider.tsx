'use client'

import { theme } from "@/theme"
import { ColorModeScript, ThemeSchemeScript, UIProvider, colorModeManager } from "@yamada-ui/react"
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
            <ColorModeScript type="cookie" nonce="testing" />
            <ThemeSchemeScript type="cookie" nonce="testing" />
            <UIProvider
                theme={theme}
                colorModeManager={{ ...colorModeManager }.cookieStorage}
            >
                {show_screen ? children : null}
            </UIProvider>
        </>
    )
}