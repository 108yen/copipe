"use client"

import { Pagination as UIPagination } from "@yamada-ui/react"
import { useRouter } from "next/navigation"

export function Pagination(props: {
  page: number
  params?: { name: string; param: string }
  total: number
  url: string
}) {
  const { page, params, total, url } = props
  const route = useRouter()

  function handleChange(value: number) {
    if (params)
      route.push(`${url}?page=${value}&${params.name}=${params.param}`)
    else route.push(`${url}?page=${value}`)
  }

  return (
    <UIPagination
      colorScheme="gray"
      justifyContent="center"
      onChange={handleChange}
      page={page}
      size="md"
      total={total}
      variant="ghost"
      w="full"
    />
  )
}
