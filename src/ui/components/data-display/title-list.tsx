import { CircleAlertIcon, PencilIcon } from "@yamada-ui/lucide"
import {
  Accordion,
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
  IconButton,
  Spacer,
} from "@yamada-ui/react"
import { CopipeWithTagPayload } from "@/db/query"

interface TitleListItemProps {
  copipe: CopipeWithTagPayload
  openModal: (copipe: CopipeWithTagPayload) => void
}

function TitleListItem({ copipe, openModal }: TitleListItemProps) {
  const notSetTag = copipe.copipeToTag.length == 0

  return (
    <AccordionItem>
      <AccordionLabel gap={1}>
        {notSetTag ? <CircleAlertIcon color="warning" /> : null}
        {copipe.title}

        <Spacer />

        <IconButton
          icon={<PencilIcon />}
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
