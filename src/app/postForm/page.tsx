import { Box, Card, CardContent, Grid } from "@mui/material";
import SearchAppBar from "@/modules/searchAppBar";
import CopipeSubmitForm from "./copipeSubmitForm";

export default function Page() {
    return (
        <>
            <SearchAppBar />
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