import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  Skeleton,
  SkeletonText,
  Spacer,
} from "@yamada-ui/react"

export function CopipeCardItemSkelton() {
  return (
    <Box gap="md" m={{ base: 2, sm: 1 }} paddingY={1} width="full">
      <HStack>
        <Skeleton h={10} marginY={1} />
        <Spacer />
        <IconButton
          aria-label="copy"
          color="secondary"
          icon={<Icon as={ContentCopyIcon} size="xl" />}
          size="xs"
          variant="ghost"
        />
      </HStack>
      <Skeleton marginY={1} w={100} />
      <Divider />
      <SkeletonText lineClamp={5} marginY={3} textHeight={5} />
    </Box>
  )
}
