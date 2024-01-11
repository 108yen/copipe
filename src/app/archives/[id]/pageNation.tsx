'use client'
import { ButtonGroup, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PageNation(props: { beforeId: number, afterId: number }) {
    const { beforeId, afterId } = props;

    const router = useRouter()

    return (
        <Box textAlign='center' flexGrow={1}>
            <ButtonGroup variant="outlined" color="secondary">
                <Button
                    startIcon={<ArrowBackIosIcon />}
                    disabled={beforeId == -1}
                    onClick={() => { router.push(`/archives/${beforeId}`) }}
                >
                    前のコピペ
                </Button>
                <Button
                    endIcon={<ArrowForwardIosIcon />}
                    disabled={afterId == -1}
                    onClick={() => { router.push(`/archives/${afterId}`) }}
                >
                    次のコピペ
                </Button>
            </ButtonGroup>
        </Box>
    )
}