'use client'

import { Stack, Box } from "@mui/material"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { AdmaxAdType } from "./conf"

export function AdmaxPCSideCard({ top = 100 }: { top?: number }) {
    const adMaxId = `ca6a1a88388a364c63924bc1c541b6ef`
    const pathname = usePathname()

    useEffect(() => {
        const tag = document.createElement(`script`)
        tag.src = `https://adm.shinobi.jp/st/t.js`
        tag.async = true
        document.body.appendChild(tag)

        const newAdmaxObj: AdmaxAdType = {
            admax_id: adMaxId,
            type: `banner`
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
        <Stack
            direction='column'
            flexGrow={1}
            justifyContent='flex-start'
            alignItems='center'
            position='fixed'
            top={top}
        >
            <Box position='relative'>
                <Box
                    key={pathname}
                    flexGrow={1}
                    width={200}
                    textAlign='center'
                    padding={2}
                >
                    <div
                        className='admax-ads'
                        data-admax-id={adMaxId}
                        style={{
                            display: `inline-block`,
                            width: 160,
                            height: 600
                        }}
                    ></div>
                </Box>
            </Box>
        </Stack>
    )
}