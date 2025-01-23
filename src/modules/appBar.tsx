import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { Box, Heading, HStack, Icon, Text } from "@yamada-ui/react"
import Link from "next/link"

export default function AppBar() {
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
            <Icon as={ContentCopyIcon} />
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
