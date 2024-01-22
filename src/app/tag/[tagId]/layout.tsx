import supabase from "@/utils/supabase"
import { notFound } from "next/navigation"
import { ReactNode } from "react"

export async function generateMetadata({ params }: { params: { tagId: string } }) {
    const tagId = Number(params.tagId)
    const { data, error } = await supabase
        .from('tag')
        .select('body')
        .eq('id', tagId)
        .single()
    if (error) notFound()
    if (data === null) notFound()

    return {
        title: data.body
    }
}

export default async function layout({ children }: {
    children: ReactNode
}) {
    return <section>{children}</section>
}