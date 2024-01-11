'use client'
import { copipeListAtom } from "../components/Atoms";
import { useAtom } from "jotai";
import { loadable } from "jotai/utils"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { CopipeCardItem } from "./copipeCardItem";
import CopipeCard from "./copipeCard";

export default function CopipeCardLoader() {
    const loadableAtom = loadable(copipeListAtom);
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
    return (
        <CopipeCard>
            {value.data.map((e) => <CopipeCardItem key={e.copipe_id} copipeItem={e} />)}
        </CopipeCard>
    );
}