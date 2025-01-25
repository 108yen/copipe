import { fetchTags } from "@/db/server/tags"
import { Box, Container, Divider, Heading, Tag, VStack } from "@yamada-ui/react"
import { unstable_cacheLife as cacheLife } from "next/cache"
import Link from "next/link"

export default async function TagListCard() {
  "use cache"
  cacheLife("max")

  const tags = await fetchTags()

  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          タグ一覧
        </Heading>
        <Divider />
        <Box>
          {tags.map((tag) => (
            <Link href={`/tag/${tag.id}`} key={`tag-${tag.id}`}>
              <Tag
                boxShadow="inset 0 0 0px 1px"
                color="secondary"
                key={tag.id}
                rounded="full"
                size="sm"
                variant="outline"
              >
                {tag.body}
              </Tag>
            </Link>
          ))}
        </Box>
      </VStack>
    </Container>
  )
}
