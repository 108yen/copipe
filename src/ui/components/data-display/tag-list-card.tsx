import { FetchTagsReturn } from "@/db/server/tags"
import {
  Box,
  Container,
  Heading,
  Separator,
  Tag,
  VStack,
} from "@yamada-ui/react"
import Link from "next/link"

interface TagListCardProps {
  tags: Awaited<FetchTagsReturn>
}

export function TagListCard({ tags }: TagListCardProps) {
  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          タグ一覧
        </Heading>

        <Separator />

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
