import { CopipeWithTag } from "@/models/copipeWithTag"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import supabase from "@/utils/supabase"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { notFound } from "next/navigation"

export default async function page({ params }: {
    params: { tagId: string, page: string }
}) {
    const tagId = Number(params.tagId)
    const page = Number(params.page)

    const { data, error } = await supabase
        .from('_copipeToTag')
        .select('*,copipe_with_tag(*)')
        .eq('tag_id', tagId)
        .order('copipe_id', { ascending: true })
        .range((page - 1) * 100, 100 * page - 1)
    if (error) notFound()

    const copipe: CopipeWithTag[] = data.map(
        value => {
            return {
                copipe_id: value.copipe_with_tag.copipe_id,
                title: value.copipe_with_tag.title,
                body: value.copipe_with_tag.body,
                tags: value.copipe_with_tag.tags
            }
        }
    )

    return (
        <Card
            sx={{
                m: { xs: 1, sm: 2 }
            }}
        >
            <CardContent>
                {copipe.map((e) => <CopipeCardItem key={e.copipe_id} copipeItem={e} />)}
            </CardContent>
        </Card>
    )

}