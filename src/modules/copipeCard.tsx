'use client'
import { copipeListAtom } from "../components/Atoms";
import { useAtom } from "jotai";
import { loadable } from "jotai/utils"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CopipeCardItem } from "./copipeCardItem";

const CopipeCard: React.FC = () => {
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
        <Card
            sx={{
                m: { xs: 1, sm: 2 }
            }}
        >
            <CardContent>
                {value.data.map((e) => <CopipeCardItem key={e.copipe_id} copipeItem={e} />)}
            </CardContent>
        </Card>
    );
}

export default CopipeCard;