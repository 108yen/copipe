'use client'

import Link from "next/link";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Divider, HStack, Heading, Icon, IconButton, Spacer, Tag, Text } from "@yamada-ui/react";
import { CopipeWithTagPayload } from "@/db/query";

async function handleClickCopy(copyText: string | null, id: bigint) {
    if (copyText == null) return
    await global.navigator.clipboard.writeText(copyText);
}

export function CopipeCardItem(props: { copipeItem: CopipeWithTagPayload }) {
    const { copipeItem } = props;

    return (
        <Box m={{ sm: 1, base: 2 }} paddingY={1} width='full'>
            <HStack>
                <Link
                    href={'/archives/' + copipeItem.id}
                    style={{
                        textDecoration: 'none',
                        overflow: 'hidden'
                    }}
                >
                    <Heading
                        variant="h5"
                        size='lg'
                        fontWeight='normal'
                        isTruncated
                        color='text.primary'
                    >
                        {copipeItem.title}
                    </Heading>
                </Link>
                <Spacer />
                <IconButton
                    color="secondary"
                    variant='ghost'
                    aria-label="copy"
                    size="xs"
                    icon={<Icon as={ContentCopyIcon} size='xl' />}
                    onClick={() => handleClickCopy(copipeItem.body, copipeItem.id)}
                />
            </HStack>
            <HStack justifyContent='flex-start' gap='xs'>
                {copipeItem.copipeToTag.map(tag =>
                    <Link key={tag.tag.id} href={`/tag/${tag.tag.id}`}>
                        <Tag
                            key={tag.tag.id}
                            variant="outline"
                            color="secondary"
                            boxShadow='inset 0 0 0px 1px'
                            size="sm"
                            rounded="full"
                        >{tag.tag.body}</Tag>
                    </Link>
                )}
            </HStack>
            <Divider />
            <Text
                variant="body1"
                whiteSpace='pre-line'
            >
                {copipeItem.body}
            </Text>
        </Box>
    );
}