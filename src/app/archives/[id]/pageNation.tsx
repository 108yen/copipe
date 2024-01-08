'use client'
import { ButtonGroup, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PageNation(props: { copipe_id: number }) {
    const { copipe_id } = props;

    const router = useRouter()

    return (
        <Box textAlign='center' flexGrow={1}>
            <ButtonGroup variant="outlined" color="secondary">
                <Button
                    startIcon={<ArrowBackIosIcon />}
                    disabled={copipe_id == 1}
                    onClick={() => { router.push(`/archives/${copipe_id - 1}`) }}
                >
                    前のコピペ
                </Button>
                <Button
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => { router.push(`/archives/${copipe_id + 1}`) }}
                >
                    次のコピペ
                </Button>
            </ButtonGroup>
        </Box>
    )
}