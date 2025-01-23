import { CopipeWithTagPayload } from "@/db/query"
import EditIcon from "@mui/icons-material/Edit"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import {
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
  Icon,
  IconButton,
  Spacer,
} from "@yamada-ui/react"

export default function TitleListItem(props: {
  copipe: CopipeWithTagPayload
  openModal: (copipe: CopipeWithTagPayload) => void
}) {
  const { copipe, openModal } = props

  const notSetTag = copipe.copipeToTag.length == 0

  return (
    <AccordionItem>
      <AccordionLabel gap={1}>
        {notSetTag ? <Icon as={ErrorOutlineIcon} color="warning" /> : null}
        {copipe.title}
        <Spacer />
        <IconButton
          icon={<Icon as={EditIcon} />}
          onClick={() => {
            openModal(copipe)
          }}
          variant="ghost"
        />
      </AccordionLabel>
      <AccordionPanel>{copipe.body}</AccordionPanel>
    </AccordionItem>
  )
}
