import { CopipeWithTag } from "@/models/copipeWithTag";
import supabase from "@/utils/supabase"
import List from "@mui/material/List";
import ListComponent from "./listComponent";


export default async function Page() {
    const { data, error } = await supabase
        .from('copipe_with_tag')
        .select('*')
        .range(0, 10);
    const copipes: CopipeWithTag[] | undefined = data?.map(value => {
        return {
            copipe_id: value.copipe_id,
            body: value.body,
            title: value.title,
            tag_bodies: value.tag_bodies
        }
    })
    return (
        <>
            <List>
                {copipes?.map(copipe => <ListComponent key={copipe.copipe_id} copipe={copipe} />)}
            </List>
        </>
    )
}