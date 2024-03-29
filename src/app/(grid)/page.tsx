import { prisma } from "@/db/db";
import { copipeWithTag } from "@/db/query";
import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItem } from "@/modules/copipeCardItem";
import CopipePagination from "@/modules/copipePagination";
import SearchForm from "@/modules/searchForm";
import { VStack } from "@yamada-ui/react";
import { cache } from "react";

const getHomePageCopipe = cache(async () => {
  const [copipes, count] = await prisma.$transaction([
    prisma.copipe.findMany({
      select: copipeWithTag,
      take: 10,
      orderBy: {
        id: "desc",
      },
    }),
    prisma.copipe.count(),
  ]);

  return { copipes, count };
});

export const revalidate = 3600;

export default async function Home() {
  const { copipes, count } = await getHomePageCopipe();

  return (
    <VStack>
      <SearchForm />
      <CopipeCard>
        {copipes.map((copipe) => (
          <CopipeCardItem
            key={`copipe-card-item-${copipe.id}`}
            copipeItem={copipe}
          />
        ))}
      </CopipeCard>
      <CopipePagination url="/search" total={Math.ceil(count / 10)} page={1} />
    </VStack>
  );
}
