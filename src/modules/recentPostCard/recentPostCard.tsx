import { fetchRecentCopipes } from "@/db/server/copipes"
import { Container, Divider, Heading, Text, VStack } from "@yamada-ui/react"
import Link from "next/link"

export default async function RecentPostsCard() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  const copipes = await fetchRecentCopipes()

  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          最近の投稿
        </Heading>
        <Divider />
        <VStack gap={0}>
          {copipes.map((copipe) => (
            <Link
              href={`/archives/${copipe.id}`}
              key={`recent-copipe-${copipe.id}`}
              style={{
                overflow: "hidden",
                textDecoration: "none",
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
