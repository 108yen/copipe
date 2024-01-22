import CopipeCard from "../copipeCard";
import { Divider, Heading, SkeletonText, VStack } from "@yamada-ui/react";

export default function LoadingTagListCard() {
    return (
        <CopipeCard>
            <VStack>
                <Heading variant='h5' fontSize='xl'>
                    タグ一覧
                </Heading>
                <Divider />
                <SkeletonText lineClamp={5} />
            </VStack>
        </CopipeCard>
    )
}