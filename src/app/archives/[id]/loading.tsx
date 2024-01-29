import LoadingComment from "@/modules/comment/loading";
import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton";
import { VStack } from "@yamada-ui/react";

export default function loading() {
  return (
    <VStack>
      <CopipeCard>
        <CopipeCardItemSkelton />
      </CopipeCard>
      <LoadingComment />
    </VStack>
  )
}