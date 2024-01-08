'use client'
import { Box } from "@mui/material"
import { AdmaxAdType } from "./conf"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function AdmaxUnderSwitch() {
    const adMaxId = `cf8aafa751eac37052292db258534613`
    const pathname = usePathname()

    useEffect(() => {
        const tag = document.createElement(`script`)
        tag.src = `https://adm.shinobi.jp/st/t.js`
        tag.async = true
        document.body.appendChild(tag)

        const newAdmaxObj: AdmaxAdType = {
            admax_id: adMaxId,
            type: `switch`
        }
        try {
            ; (window.admaxads = window.admaxads || []).push(newAdmaxObj)
        } catch (error) {
            console.error(error)
        }
        return () => {
            document.body.removeChild(tag)

            window.admaxads = window.admaxads.filter(
                (admaxad) => admaxad.admax_id != adMaxId
            )

            window.__admax_tag__ = undefined
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <Box
            key={pathname}
            flexGrow={1}
            m={1}
            sx={{ textAlign: { xs: 'none', sm: 'center' } }}
        >
            <div
                className='admax-switch'
                data-admax-id={adMaxId}
                style={{
                    display: `inline-block`,
                }}
            ></div>
        </Box>
    )
}