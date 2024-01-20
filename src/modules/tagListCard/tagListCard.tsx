import { Tag as TagModel } from "@/models/tag";
import CopipeCard from "../copipeCard";
import { Box, Divider, Heading, Tag, VStack } from "@yamada-ui/react";
import Link from "next/link";

export default function TagListCard(props: { tags: TagModel[] }) {
    const { tags } = props;

    return (
        <CopipeCard>
            <VStack>
                <Heading variant='h5' fontSize='xl'>
                    タグ一覧
                </Heading>
                <Divider />
                <Box>
                    {tags.map(tag => (
                        <Link key={`tag-${tag.id}`} href={`/tag/${tag.id}/1`}>
                            <Tag
                                key={tag.id}
                                variant="outline"
                                color="secondary"
                                boxShadow='inset 0 0 0px 1px'
                                size="sm"
                                rounded="full"
                            >{tag.body}</Tag>
                        </Link>
                    ))}
                </Box>
            </VStack>
        </CopipeCard>
    )
}