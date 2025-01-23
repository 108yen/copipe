"use client"

import Script from "next/script"

import { GA_MEASUREMENT_ID } from "./gtag"

export default function GoogleAnalytics({
  clientIp = "none",
  debugMode = false,
}: {
  clientIp?: string
  debugMode: boolean
}) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}', {
                            page_path: window.location.pathname,
                            ip_address: '${clientIp}',
                            ${debugMode ? `debug_mode: ${debugMode},` : ``}
                        });
                    `}
      </Script>
    </>
  )
}
