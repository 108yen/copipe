import { AccordionItem, AccordionLabel, AccordionPanel, Icon, IconButton, Spacer } from "@yamada-ui/react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import EditIcon from '@mui/icons-material/Edit';
import { CopipeWithTagPayload } from "@/db/query";

export default function TitleListItem(props: {
    copipe: CopipeWithTagPayload,
    openModal: (copipe: CopipeWithTagPayload) => void
}) {
    const { copipe, openModal } = props;

    const notSetTag = copipe.copipeToTag.length == 0

    return (
        <AccordionItem>
            <AccordionLabel gap={1}>
                {notSetTag ? <Icon color='warning' as={ErrorOutlineIcon} /> : null}
                {copipe.title}
                <Spacer />
                <IconButton
                    variant='ghost'
                    icon={<Icon as={EditIcon} />}
                    onClick={() => { openModal(copipe) }} />
            </AccordionLabel>
            <AccordionPanel>
                {copipe.body}
            </AccordionPanel>
        </AccordionItem>
    )
}