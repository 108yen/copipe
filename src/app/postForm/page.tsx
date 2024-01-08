import { Box, Card, CardContent, Grid } from "@mui/material";
import CopipeSubmitForm from "./copipeSubmitForm";

export const metadata = {
    title:'投稿フォーム'
}

export default function Page() {
    return (
        <>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Card>
                            <CardContent>
                                <CopipeSubmitForm />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}