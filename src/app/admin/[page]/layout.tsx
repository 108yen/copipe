import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import AdminPageNation from "./pageNation";

export default async function layout({ params, children }: { params: { page: string }, children: ReactNode }) {
    const page = Number(params.page)

    const { data, error, status, count } = await supabase
        .from('copipe')
        .select('*', { count: 'exact', head: true })
    if (error) notFound()



    return (
        <>
            {children}
            <AdminPageNation count={count} page={page} />
        </>
    )
}