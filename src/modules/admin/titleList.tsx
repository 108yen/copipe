import { CopipeWithTag } from "@/models/copipeWithTag";
import { Accordion } from "@yamada-ui/react";
import TitleListItem from "./titleListItem";

export default function TitleList(props: {
    copipes: CopipeWithTag[],
    openModal: (copipe: CopipeWithTag) => void
}) {
    const { copipes, openModal } = props

    return (
        <Accordion iconHidden>
            {copipes.map(copipe => <TitleListItem
                key={copipe.copipe_id}
                copipe={copipe}
                openModal={openModal}
            />)}
        </Accordion>
    )

}