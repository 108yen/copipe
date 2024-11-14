"use client"

import { Pagination } from "@yamada-ui/react"
import { useRouter } from "next/navigation"

export default function CopipePagination(props: {
  url: string
  params?: { name: string; param: string }
  total: number
  page: number
}) {
  const { url, params, total, page } = props
  const route = useRouter()

  function handleChange(value: number) {
    if (params)
      route.push(`${url}?page=${value}&${params.name}=${params.param}`)
    else route.push(`${url}?page=${value}`)
  }

  return (
    <Pagination
      justifyContent="center"
      size="md"
      variant="ghost"
      total={total}
      page={page}
      onChange={handleChange}
      colorScheme="gray"
      w="full"
    />
  )
}
