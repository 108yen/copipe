"use client"

import { CopipeWithTagPayload } from "@/db/query"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Separator,
  Spacer,
  Tag,
  Text,
} from "@yamada-ui/react"
import Link from "next/link"

async function handleClickCopy(copyText: null | string) {
  if (copyText == null) return
  await global.navigator.clipboard.writeText(copyText)
}

export function CopipeCardItem(props: { copipeItem: CopipeWithTagPayload }) {
  const { copipeItem } = props

  return (
    <Box m={{ base: 2, sm: 1 }} paddingY={1} width="full">
      <HStack>
        <Link
          href={"/archives/" + copipeItem.id}
          style={{
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          <Heading
            color="text.primary"
            fontWeight="normal"
            isTruncated
            size="lg"
            variant="h5"
          >
            {copipeItem.title}
          </Heading>
        </Link>
        <Spacer />
        <IconButton
          aria-label="copy"
          color="secondary"
          icon={<Icon as={ContentCopyIcon} size="xl" />}
          onClick={() => handleClickCopy(copipeItem.body)}
          size="xs"
          variant="ghost"
        />
      </HStack>
      <HStack gap="xs" justifyContent="flex-start">
        {copipeItem.copipeToTag.map((tag) => (
          <Link href={`/tag/${tag.tag.id}`} key={tag.tag.id}>
            <Tag
              boxShadow="inset 0 0 0px 1px"
              color="secondary"
              key={tag.tag.id}
              rounded="full"
              size="sm"
              variant="outline"
            >
              {tag.tag.body}
            </Tag>
          </Link>
        ))}
      </HStack>
      <Separator />
      <Text variant="body1" whiteSpace="pre-line">
        {copipeItem.body}
      </Text>
    </Box>
  )
}
