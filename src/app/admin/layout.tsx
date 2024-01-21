import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import { ReactNode, cache } from "react";
import CopipePagination from "@/modules/copipePagination";

export const revalidate = 3600

const getCopipeCount = cache(async () => await supabase
    .from('copipe')
    .select('*', { count: 'exact', head: true }))

export default async function layout({ searchParams, children }: {
    searchParams: { [key: string]: string | string[] | undefined },
    children: ReactNode
}) {
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

    const { data, error, status, count } = await getCopipeCount()
    if (error) notFound()

    return (
        <>
            {children}
            <CopipePagination
                url="/admin"
                total={count ? Math.ceil(count / 100) : 0}
                page={page} />
        </>
    )
}