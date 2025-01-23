"use client"

import { Box, VStack } from "@yamada-ui/react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { AdmaxAdType } from "./conf"

export default function AdmaxPCSideVertical() {
  const adMaxId = `ca6a1a88388a364c63924bc1c541b6ef`
  const pathname = usePathname()

  useEffect(() => {
    const tag = document.createElement(`script`)
    tag.src = `https://adm.shinobi.jp/st/t.js`
    tag.async = true
    document.body.appendChild(tag)

    const newAdmaxObj: AdmaxAdType = {
      admax_id: adMaxId,
      type: `banner`,
    }
    try {
      ;(window.admaxads = window.admaxads || []).push(newAdmaxObj)
    } catch (error) {
      console.error(error)
    }
    return () => {
      document.body.removeChild(tag)

      window.admaxads = window.admaxads.filter(
        (admaxad) => admaxad.admax_id != adMaxId,
      )

      window.__admax_tag__ = undefined
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <VStack
      alignItems="center"
      flexGrow={1}
      justifyContent="flex-start"
      zIndex={10}
    >
      <Box position="relative">
        <Box
          flexGrow={1}
          key={pathname}
          padding={2}
          textAlign="center"
          width={200}
        >
          <div
            className="admax-ads"
            data-admax-id={adMaxId}
            style={{
              display: `inline-block`,
              height: 600,
              width: 160,
            }}
          ></div>
        </Box>
      </Box>
    </VStack>
  )
}
