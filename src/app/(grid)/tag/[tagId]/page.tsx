import AdmaxUnderSwitch from "@/ad/admax/underSwitch"
import { prisma } from "@/db/db"
import { copipeWithTag } from "@/db/query"
import CopipeCard from "@/modules/copipeCard"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import { VStack } from "@yamada-ui/react"

export default async function page({ params, searchParams }: {
    params: { tagId: string },
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const tagId = Number(params.tagId)
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

    const tagQuery = {
        copipeToTag: {
            some: {
                tag_id: tagId
            }
        }
    }
    const [copipes, count] = await prisma.$transaction([
        prisma.copipe.findMany({
            where: tagQuery,
            select: copipeWithTag,
            take: 10,
            skip: (page - 1) * 10,
            orderBy: { id: "desc" }
        }),
        prisma.copipe.count({
            where: tagQuery,
        })
    ])

    return (
        <VStack>
            <CopipeCard>
                {copipes.map((e) => <CopipeCardItem key={e.id} copipeItem={e} />)}
            </CopipeCard>
            <AdmaxUnderSwitch />
            <CopipePagination url={`/tag/${tagId}`} total={Math.ceil(count / 10)} page={page} />
        </VStack>
    )

}