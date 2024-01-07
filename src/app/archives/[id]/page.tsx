import { Copipe } from "@/components/Atoms";
import SearchAppBar from "@/modules/searchAppBar";
import supabase from "@/utils/supabase";
import { Box, Card, CardContent,  Grid } from "@mui/material";
import { CopipeItemWidget } from "@/modules/copipeCard";
import { notFound } from "next/navigation";
import { cache } from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params;
    const copipe = await getCopipe(Number(id))

    return {
        title: copipe.title
    };
}

const getCopipe = cache(async (id: number) => {
    const { data, error } = await supabase
        .from('copipe')
        .select()
        .eq("id", id)
        .maybeSingle();
    if (error) notFound();

    const copipe: Copipe = {
        id: data.id,
        inserted_at: data.inserted_at,
        updated_at: data.updated_at,
        body: data.body,
        title: data.title,
    };

    return copipe;
});    

function ArchiveBody(props: {copipe: Copipe}) {
    const { copipe } = props;

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Card
                        sx={{
                            m: { xs: 1, sm: 2 }
                        }}
                    >
                        <CardContent>
                            <CopipeItemWidget id={copipe.id} inserted_at={copipe.inserted_at} updated_at={copipe.updated_at} body={copipe.body} title={copipe.title} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const copipe = await getCopipe(Number(id))

    return (
        <>
            <SearchAppBar />
            <ArchiveBody copipe={copipe}/>
        </>
    );
}