import { Copipe } from "@/components/Atoms";
import SearchAppBar from "@/modules/searchAppBar";
import theme from "@/theme";
import supabase from "@/utils/supabase";
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { atom, useAtom } from "jotai";
import { loadable } from "jotai/utils";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CopipeItemWidget } from "@/modules/copipeCard";

const copipeIdAtom = atom<number | undefined>(undefined);
const copipeAtom = atom<Promise<Copipe | undefined>>(
    async (get) => {
        async function postCopipe(id: number) {
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
        if (get(copipeIdAtom) != undefined) {
            const copipes = await postCopipe(get(copipeIdAtom)!);
            return copipes.length != 0 ? copipes[0] : undefined;
        } else {
            return undefined;
        }
    }
)

function ArchiveBody() {
    const loadableAtom = loadable(copipeAtom);
    const [value] = useAtom(loadableAtom);
    
    if (value.state === 'hasError') {
        return <Box
            key={0}
            sx={{
                m: 3,
                display: "flex",
                justifyContent: "center"
            }}>
            <Typography>error</Typography>
        </Box>;
    }
    if (value.state === 'loading') {
        return <Box
            key={0}
            sx={{
                m: 3,
                display: "flex",
                justifyContent: "center"
            }}>
            <CircularProgress color="secondary" />
        </Box>;
    }
    if (value.data == undefined) {
        return <Box
            key={0}
            sx={{
                m: 3,
                display: "flex",
                justifyContent: "center"
            }}>
            <Typography>no data</Typography>
        </Box>;
    }
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Card
                        sx={{
                            m: { xs: theme.spacing(1), sm: theme.spacing(2) }
                        }}
                    >
                        <CardContent>
                            {CopipeItemWidget(value.data)}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default function Archive() {
    const [, setCopipeId] = useAtom(copipeIdAtom);
    const loadableAtom = loadable(copipeAtom);
    const [value] = useAtom(loadableAtom);
    const router = useRouter();
    const { id } = router.query;



    useEffect(() => {
        function isStringInt(value: string | string[] | undefined): boolean {
            if (typeof value === "string") {
                const intValue = Number(value)
                return Number.isInteger(intValue)
            } else {
                return false;
            }
        }
        async function fetch() {
            setCopipeId(Number(id));
        }
        if (router.isReady && isStringInt(id)) {
            fetch();
        }
    }, [router]);

    function headDiscription() {
        if (value.state === 'hasData' && value.data != undefined) {
            if (value.data.title == "") {
                return "copipe | " + value.data.body.substring(0, 20);
            }
            return "copipe | " + value.data.title;
        } else {
            return "copipe | アーカイブ";
        }
    }

    function title() {
        if (value.state === 'hasData' && value.data != undefined) {
            return "copipe | " + value.data.body;
        } else {
            return "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。";
        }
    }

    return (
        <>
            <NextSeo
                title={title()}
                description={headDiscription()}
                openGraph={{
                    url: "https://www.netcopipe.com/",
                    title: title(),
                    description: headDiscription(),
                    images: [
                        {
                            url: "https://www.netcopipe.com/android-chrome-512x512.png",
                        },
                    ],
                }}
            />
            <ArticleJsonLd
                url="https://www.netcopipe.com/"
                title={title()}
                images={["https://www.netcopipe.com/android-chrome-512x512.png"]}
                datePublished="20230226"
                dateModified="20230226"
                authorName="108yen"
                publisherName="108yen"
                publisherLogo=""
                description="個々のコピペが閲覧可能なページ"
            />

            <SearchAppBar />
            <ArchiveBody />
        </>
    );
}