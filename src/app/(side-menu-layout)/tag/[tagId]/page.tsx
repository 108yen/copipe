import { Center, Loading } from "@yamada-ui/react"
import { NextPageProps } from "next"
import { Metadata } from "next/types"
import { Suspense } from "react"
import { TagPageTemplate } from "@/ui/templates"

export const metadata: Metadata = {
  title: "タグ",
}

export default async function Page({
  params,
  searchParams,
}: NextPageProps<{ tagId: string }>) {
  return (
    <Suspense
      fallback={
        <Center h="3xs" w="full">
          <Loading fontSize="2xl" />
        </Center>
      }
    >
      <TagPageTemplate params={params} searchParams={searchParams} />
    </Suspense>
  )
}
