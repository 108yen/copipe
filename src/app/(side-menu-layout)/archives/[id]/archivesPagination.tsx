"use client"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Box, Button, ButtonGroup, Icon } from "@yamada-ui/react"
import { useRouter } from "next/navigation"

export default function ArchivesPagination(props: {
  afterId: number
  beforeId: number
}) {
  const { afterId, beforeId } = props

  const router = useRouter()

  return (
    <Box flexGrow={1} textAlign="center">
      <ButtonGroup bg="white" isAttached variant="outline">
        <Button
          disabled={beforeId == -1}
          leftIcon={<Icon as={ArrowBackIosIcon} />}
          onClick={() => {
            router.push(`/archives/${beforeId}`)
          }}
        >
          前のコピペ
        </Button>
        <Button
          disabled={afterId == -1}
          onClick={() => {
            router.push(`/archives/${afterId}`)
          }}
          rightIcon={<Icon as={ArrowForwardIosIcon} />}
        >
          次のコピペ
        </Button>
      </ButtonGroup>
    </Box>
  )
}
