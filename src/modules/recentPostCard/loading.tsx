import {
    Container,
    Divider,
    Heading,
    SkeletonText,
    VStack,
} from "@yamada-ui/react";

export default function LoadingRecentPostsCard() {
    return (
        <Container>
            <VStack>
                <Heading variant="h5" fontSize="xl">
                    最近の投稿
                </Heading>
                <Divider />
                <SkeletonText lineClamp={50} />
            </VStack>
        </Container>
    );
}
