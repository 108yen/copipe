import { CopipeWithTag } from "@/models/copipeWithTag";
import { AccordionItem, AccordionLabel, AccordionPanel, HStack, Icon, IconButton, Spacer } from "@yamada-ui/react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import EditIcon from '@mui/icons-material/Edit';

export default function TitleListItem(props: {
    copipe: CopipeWithTag,
    openModal: (copipe: CopipeWithTag) => void
}) {
    const { copipe, openModal } = props;

    const notSetTag = copipe.tags.length == 1 && copipe.tags[0].tag_body == null;

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