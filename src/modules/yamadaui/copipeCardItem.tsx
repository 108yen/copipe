'use client'

import { CopipeWithTag } from "@/models/copipeWithTag";
import Link from "next/link";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Divider, HStack, Heading, Icon, IconButton, Spacer, Tag, Text } from "@yamada-ui/react";

async function handleClickCopy(copyText: string, id: number) {
    await global.navigator.clipboard.writeText(copyText);
}

export function CopipeCardItem(props: { copipeItem: CopipeWithTag }) {
    const { copipeItem } = props;

    return (
        <Box m={{ sm: 1, base: 2 }} paddingY={1}
        >
            <HStack>
                <Link
                    href={'/archives/' + copipeItem.copipe_id}
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
                    colorScheme="secondary"
                    variant='ghost'
                    aria-label="copy"
                    size="xs"
                    icon={<Icon as={ContentCopyIcon} size='xl' />}
                    onClick={() => handleClickCopy(copipeItem.body, copipeItem.copipe_id)}
                />
            </HStack>
            <HStack justifyContent='flex-start' gap='xs'>
                {copipeItem.tags.map(tag =>
                    tag.tag_body == null
                        ? null
                        : <Link key={tag.tag_id} href={`/tag/${tag.tag_id}/1`}>
                            <Tag
                                key={tag.tag_id}
                                variant="outline"
                                colorScheme="secondary"
                                size="sm"
                                rounded="full"
                            >{tag.tag_body}</Tag>
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