import { CopipeWithTagPayload } from "@/db/query"
import EditIcon from "@mui/icons-material/Edit"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import {
  Accordion,
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
  Icon,
  IconButton,
  Spacer,
} from "@yamada-ui/react"

interface TitleListItemProps {
  copipe: CopipeWithTagPayload
  openModal: (copipe: CopipeWithTagPayload) => void
}

function TitleListItem({ copipe, openModal }: TitleListItemProps) {
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

interface TitleListProps {
  copipes: CopipeWithTagPayload[]
  openModal: (copipe: CopipeWithTagPayload) => void
}

export function TitleList({ copipes, openModal }: TitleListProps) {
  return (
    <Accordion iconHidden>
      {copipes.map((copipe) => (
        <TitleListItem copipe={copipe} key={copipe.id} openModal={openModal} />
      ))}
    </Accordion>
  )
}
