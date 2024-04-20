import { Container, Text, VStack } from "@yamada-ui/react"
import SearchForm from "@/modules/searchForm"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import { prisma } from "@/db/db"
import { copipeWithTag } from "@/db/query"

export const metadata = {
  title: "検索",
}

function NotHit() {
  return (
    <Text variant="body1" textStyle="noHit">
      該当なし
    </Text>
  )
}

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const searchText =
    typeof searchParams.text === "string" ? searchParams.text : ""
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const searchQuery =
    searchText == ""
      ? {}
      : {
        body: {
          contains: searchText,
        },
      }
  const [copipes, count] = await prisma.$transaction([
    prisma.copipe.findMany({
      where: searchQuery,
      select: copipeWithTag,
      take: 10,
      skip: (page - 1) * 10,
      orderBy: { id: "desc" },
    }),
    prisma.copipe.count({
      where: searchQuery,
    }),
  ])

  return (
    <VStack>
      <SearchForm />
      <Container>
        {copipes.length == 0 ? (
          <NotHit key="not-hit" />
        ) : (
          copipes.map((copipe) => (
            <CopipeCardItem key={copipe.id} copipeItem={copipe} />
          ))
        )}
      </Container>
      <CopipePagination
        url="/search"
        params={{ name: "text", param: searchText }}
        total={Math.ceil(count / 10)}
        page={page}
      />
    </VStack>
  )
}
