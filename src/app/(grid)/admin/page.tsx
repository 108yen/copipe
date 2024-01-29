import AdminPageTemplate from "@/modules/admin";
import CopipePagination from "@/modules/copipePagination";
import { notFound } from "next/navigation";
import { VStack } from "@yamada-ui/react";
import { prisma } from "@/db/db";
import { copipeWithTag } from "@/db/query";

export const revalidate = 3600

export default async function Page({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = typeof searchParams.page === 'string'
        ? Number(searchParams.page) : 1
    const [copipes, count, tags] = await prisma.$transaction([
        prisma.copipe.findMany({
            select: copipeWithTag,
            take: 100,
            skip: (page - 1) * 100,
            orderBy: { id: 'desc' }
        }),
        prisma.copipe.count(),
        prisma.tag.findMany()
    ]).catch(error => notFound())

    return (
        <VStack>
            <AdminPageTemplate copipes={copipes} tags={tags} />
            <CopipePagination
                url="/admin"
                total={count ? Math.ceil(count / 100) : 0}
                page={page} />
        </VStack>
    )
}