import { Container } from "@yamada-ui/react"
import { NextPageProps } from "next"
import { Metadata } from "next/types"
import { Suspense } from "react"
import {
  CopipeCardItemSkelton,
  LoadingSearchForm,
} from "@/ui/components/loading"
import { SearchPageTemplate } from "@/ui/templates"

export const metadata: Metadata = {
  title: "検索",
}

export default async function page({ searchParams }: NextPageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <SearchPageTemplate searchParams={searchParams} />
    </Suspense>
  )
}

function Loading() {
  return (
    <>
      <LoadingSearchForm />

      <Container>
        {[...Array(10)].map((_, index) => (
          <CopipeCardItemSkelton key={`skelton-${index}`} />
        ))}
      </Container>
    </>
  )
}
