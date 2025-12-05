import {
  Box,
  HStack,
  IconButton,
  Separator,
  Skeleton,
  SkeletonText,
  Spacer,
} from "@yamada-ui/react"
import { CopyIcon } from "../icon"

export function CopipeCardItemSkelton() {
  return (
    <Box gap="md" m={{ base: 2, sm: 1 }} paddingY={1} width="full">
      <HStack>
        <Skeleton h={10} marginY={1} />

        <Spacer />

        <IconButton
          aria-label="copy"
          color="secondary"
          icon={<CopyIcon fontSize="xl" />}
          size="xs"
          variant="ghost"
        />
      </HStack>

      <Skeleton marginY={1} w={100} />

      <Separator />

      <SkeletonText lineClamp={5} marginY={3} textHeight={5} />
    </Box>
  )
}
