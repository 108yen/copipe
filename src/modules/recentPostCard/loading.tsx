import { Divider, Heading, SkeletonText, VStack } from "@yamada-ui/react";
import CopipeCard from "../copipeCard";

export default function LoadingRecentPostsCard() {
    return (
        <CopipeCard>
            <VStack>
                <Heading variant='h5' fontSize='xl'>
                    最近の投稿
                </Heading>
                <Divider />
                <SkeletonText lineClamp={50}/>
            </VStack>
        </CopipeCard>
    )

}