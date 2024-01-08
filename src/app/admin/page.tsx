import { Copipe } from "@/models/copipe";
import supabase from "@/utils/supabase"
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

type CopipeWithTag = {
    copipe_id: number;
    title: string;
    body: string;
    tag_bodies: string[];
}

export default async function Page() {
    const { data, error } = await supabase
        .from('copipe_with_tag')
        .select('*')
        .range(0, 10);
    const copipes: CopipeWithTag[] | undefined = data?.map(value => {
        return {
            copipe_id: value.id,
            body: value.body,
            title: value.title,
            tag_bodies: value.tag_bodies
        }
    })
    return (
        <>
            <List>
                {copipes?.map(copipe => (
                    <div key={copipe.copipe_id} >
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={
                                    <Stack direction='column'>
                                        {copipe.title}
                                        <Stack direction='row'>
                                            {copipe.tag_bodies.map(tag => tag == null ? null : <Chip key={tag} label={tag} size="small" />)}
                                        </Stack>
                                    </Stack>
                                }
                                secondary={copipe.body}
                            />
                        </ListItem>
                        <Divider variant="middle" />
                    </div>
                ))}
            </List>
        </>
    )
}