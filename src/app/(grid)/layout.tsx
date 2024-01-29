import AdmaxPCSideVertical from "@/ad/admax/pcSideVertical";
import AppBar from "@/modules/appBar";
import RecentPostsCard from "@/modules/recentPostCard";
import TagListCard from "@/modules/tagListCard";
import { GridItem, SimpleGrid, VStack } from "@yamada-ui/react";
import { ReactNode, Suspense } from "react";
import LoadingRecentPostsCard from "@/modules/recentPostCard/loading";
import LoadingTagListCard from "@/modules/tagListCard/loading";

export default function layout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <AppBar />
      <SimpleGrid columns={4} gap="lg" w='full' paddingX={{ base: 350, "2xl": 100, xl: 50, lg: 25, md: 0 }} marginY='lg'>
        <GridItem colSpan={{ base: 3, md: 4 }} w='full'>
          {children}
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 0 }} w='full' display={{ base: 'block', md: 'none' }}>
          <VStack>
            <AdmaxPCSideVertical />
            <Suspense fallback={<LoadingTagListCard />}>
              <TagListCard />
            </Suspense>
            <Suspense fallback={<LoadingRecentPostsCard />}>
              <RecentPostsCard />
            </Suspense>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </>
)
}