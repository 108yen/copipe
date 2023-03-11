import { Copipe, copipeListAtom } from "@/components/Atoms";
import SearchAppBar from "@/modules/searchAppBar";
import supabase from "@/utils/supabase";
import { Box, Grid } from "@mui/material";
import { useAtom } from "jotai";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CopipeCard from '../../modules/copipeCard';

export default function Archive() {
    const [copipeList, setCopipeList] = useAtom(copipeListAtom);
    const router = useRouter();
    const { id } = router.query;

    async function postCopipe(id:number) {
        const { data, error } = await supabase
            .from('copipe')
            .select()
            .eq("id", id);
        const copipes: Array<Copipe> = data != null ? data.map(e => {
            const copipeItem: Copipe = {
                id: e.id,
                inserted_at: e.inserted_at,
                updated_at: e.updated_at,
                body: e.body,
                title: e.title,
            };
            return copipeItem;
        }) : [];

        return copipes;
    }

    
    useEffect(() => {
        function isStringInt(value: string | string[] | undefined): boolean {
            if (typeof value==="string") {
                const intValue = Number(value)
                return Number.isInteger(intValue)
            } else {
                return false;
            }
        }
        async function fetch() {
            setCopipeList(await postCopipe(Number(id)));
        }
        if (router.isReady && isStringInt(id)) {
            fetch();
        }
    }, [router]);
    
    const headDiscription = (copipeList: Array<Copipe>) => {
        return copipeList.length != 0 ? copipeList[0].body : "";
    }
    
    return (
        <>
            <NextSeo
                title="copipe | アーカイブ"
                description={headDiscription(copipeList)}
                openGraph={{
                    url: "https://www.netcopipe.com/",
                    title: "copipe | アーカイブ",
                    description: "コピペが検索できるサイト。",
                    images: [
                        {
                            url: "https://www.netcopipe.com/android-chrome-512x512.png",
                        },
                    ],
                }}
            />
            <ArticleJsonLd
                url="https://www.netcopipe.com/"
                title="copipe | アーカイブ"
                images={["https://www.netcopipe.com/android-chrome-512x512.png"]}
                datePublished="20230226"
                dateModified="20230226"
                authorName="108yen"
                publisherName="108yen"
                publisherLogo=""
                description="個々のコピペが閲覧可能なページ"
            />
            
            <SearchAppBar />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={10} lg={8} xl={6}>
                        <CopipeCard copipeList={copipeList} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}