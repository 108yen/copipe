import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import { ReactNode, cache } from "react";
import AdminPageNation from "./pageNation";

export const revalidate = 3600

const getCopipeCount = cache(async () => await supabase
    .from('copipe')
    .select('*', { count: 'exact', head: true }))

export default async function layout({ params, children }: { params: { page: string }, children: ReactNode }) {
    const page = Number(params.page)

    const { data, error, status, count } = await getCopipeCount()
    console.log(count)
    if (error) notFound()

    return (
        <>
            {children}
            <AdminPageNation count={count} page={page} />
        </>
    )
}