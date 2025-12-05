import { Box, Heading, HStack, Icon, Text } from "@yamada-ui/react"
import Link from "next/link"

function CopyIcon() {
  return (
    <Icon
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" />
    </Icon>
  )
}

export function Header() {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="solid 0.1px gray"
      display="flex"
      height={65}
      paddingX={5}
      w="full"
    >
      <HStack alignItems="center" justifyContent="space-between" w="full">
        <Link
          href="/"
          style={{
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          <HStack alignItems="center">
            <CopyIcon />
            <Heading fontFamily="san-serif" fontSize="25px" variant="h1">
              copipe
            </Heading>
          </HStack>
        </Link>
        <Link
          href="/about"
          style={{
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          <Text color="gray" fontSize="sm">
            このサイトについて
          </Text>
        </Link>
      </HStack>
    </Box>
  )
}
