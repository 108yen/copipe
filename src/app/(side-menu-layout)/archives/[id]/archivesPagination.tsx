"use client"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Box, Button, ButtonGroup, Icon } from "@yamada-ui/react"
import { useRouter } from "next/navigation"

export default function ArchivesPagination(props: {
  beforeId: number
  afterId: number
}) {
  const { beforeId, afterId } = props

  const router = useRouter()

  return (
    <Box textAlign="center" flexGrow={1}>
      <ButtonGroup isAttached variant="outline" bg="white">
        <Button
          leftIcon={<Icon as={ArrowBackIosIcon} />}
          disabled={beforeId == -1}
          onClick={() => {
            router.push(`/archives/${beforeId}`)
          }}
        >
          前のコピペ
        </Button>
        <Button
          rightIcon={<Icon as={ArrowForwardIosIcon} />}
          disabled={afterId == -1}
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
