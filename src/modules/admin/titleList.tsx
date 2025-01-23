import { CopipeWithTagPayload } from "@/db/query"
import { Accordion } from "@yamada-ui/react"

import TitleListItem from "./titleListItem"

export default function TitleList(props: {
  copipes: CopipeWithTagPayload[]
  openModal: (copipe: CopipeWithTagPayload) => void
}) {
  const { copipes, openModal } = props

  return (
    <Accordion iconHidden>
      {copipes.map((copipe) => (
        <TitleListItem copipe={copipe} key={copipe.id} openModal={openModal} />
      ))}
    </Accordion>
  )
}
