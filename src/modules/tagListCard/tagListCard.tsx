import { fetchTags } from "@/db/server/tags"
import { Box, Container, Divider, Heading, Tag, VStack } from "@yamada-ui/react"
import Link from "next/link"

export default async function TagListCard() {
    const tags = await fetchTags()

    return (
        <Container>
            <VStack>
                <Heading variant="h5" fontSize="xl">
                    タグ一覧
                </Heading>
                <Divider />
                <Box>
                    {tags.map((tag) => (
                        <Link key={`tag-${tag.id}`} href={`/tag/${tag.id}`}>
                            <Tag
                                key={tag.id}
                                variant="outline"
                                color="secondary"
                                boxShadow="inset 0 0 0px 1px"
                                size="sm"
                                rounded="full"
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
