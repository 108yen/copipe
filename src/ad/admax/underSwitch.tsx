"use client"
import { Box } from "@yamada-ui/react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { AdmaxAdType } from "./conf"

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
      type: `switch`,
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
    <Box
      flexGrow={1}
      key={pathname}
      m={1}
      textAlign={{ base: "center", md: "unset" }}
    >
      <div
        className="admax-switch"
        data-admax-id={adMaxId}
        style={{
          display: `inline-block`,
        }}
      ></div>
    </Box>
  )
}
