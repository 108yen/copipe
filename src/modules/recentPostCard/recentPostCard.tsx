import { fetchRecentCopipes } from "@/db/server/copipes"
import { Container, Divider, Heading, Text, VStack } from "@yamada-ui/react"
import Link from "next/link"

export default async function RecentPostsCard() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  const copipes = await fetchRecentCopipes()

  return (
    <Container>
      <VStack>
        <Heading variant="h5" fontSize="xl">
          最近の投稿
        </Heading>
        <Divider />
        <VStack gap={0}>
          {copipes.map((copipe) => (
            <Link
              prefetch={false}
              key={`recent-copipe-${copipe.id}`}
              href={`/archives/${copipe.id}`}
              style={{
                textDecoration: "none",
                overflow: "hidden",
              }}
            >
              <Text
                isTruncated
                sx={{
                  "&:hover": {
                    textDecorationLine: "underline",
                  },
                }}
              >
                {copipe.title}
              </Text>
            </Link>
          ))}
        </VStack>
      </VStack>
    </Container>
  )
}
