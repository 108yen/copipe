import { Accordion } from "@yamada-ui/react";
import TitleListItem from "./titleListItem";
import { CopipeWithTagPayload } from "@/db/query";

export default function TitleList(props: {
    copipes: CopipeWithTagPayload[],
    openModal: (copipe: CopipeWithTagPayload) => void
}) {
    const { copipes, openModal } = props

    return (
        <Accordion iconHidden>
            {copipes.map(copipe => <TitleListItem
                key={copipe.id}
                copipe={copipe}
                openModal={openModal}
            />)}
        </Accordion>
    )

}