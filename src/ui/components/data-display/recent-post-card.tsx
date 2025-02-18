import { FetchRecentCopipesReturn } from "@/db/server/copipes"
import { Container, Heading, Separator, Text, VStack } from "@yamada-ui/react"
import Link from "next/link"

interface RecentPostsCardProps {
  copipes: Awaited<FetchRecentCopipesReturn>
}

export function RecentPostsCard({ copipes }: RecentPostsCardProps) {
  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          最近の投稿
        </Heading>

        <Separator />

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
