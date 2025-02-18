"use client"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Box, Button, ButtonGroup, Icon } from "@yamada-ui/react"
import { useRouter } from "next/navigation"

export function ArchivesPagination(props: {
  afterId: number
  beforeId: number
}) {
  const { afterId, beforeId } = props

  const router = useRouter()

  return (
    <Box flexGrow={1} textAlign="center">
      <ButtonGroup attached bg="white" variant="outline">
        <Button
          disabled={beforeId == -1}
          onClick={() => {
            router.push(`/archives/${beforeId}`)
          }}
          startIcon={<Icon as={ArrowBackIosIcon} />}
        >
          前のコピペ
        </Button>
        <Button
          disabled={afterId == -1}
          endIcon={<Icon as={ArrowForwardIosIcon} />}
          onClick={() => {
            router.push(`/archives/${afterId}`)
          }}
        >
          次のコピペ
        </Button>
      </ButtonGroup>
    </Box>
  )
}
