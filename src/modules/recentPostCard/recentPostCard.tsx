import { Divider, Heading, Text, VStack } from "@yamada-ui/react";
import CopipeCard from "../copipeCard";
import Link from "next/link";

export default function RecentPostsCardTemplate(props: {
    copipes: { id: number, title: string }[]
}) {
    const { copipes } = props;

    return (
        <CopipeCard>
            <VStack>
                <Heading variant='h5' fontSize='xl'>
                    最近の投稿
                </Heading>
                <Divider />
                <VStack gap={0}>
                    {copipes.map(copipe =>
                        <Link
                            key={`recent-copipe-${copipe.id}`}
                            href={`/archives/${copipe.id}`}
                            style={{
                                textDecoration: 'none',
                                overflow: 'hidden'
                            }}
                        >
                            <Text
                                isTruncated
                                sx={{
                                    '&:hover': {
                                        textDecorationLine: 'underline'
                                    }
                                }}>
                                {copipe.title}
                            </Text>
                        </Link>
                    )}
                </VStack>
            </VStack>
        </CopipeCard>
    )

}