import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import SearchAppBar from "./modules/searchAppBar";

const PostForm: NextPage = () => {
    return (
        <>
            <SearchAppBar />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Card>
                            <CardContent>
                                <form onSubmit={()=>{}}>
                                    <TextField
                                        label="Title"
                                        fullWidth
                                        margin="normal" />
                                    <TextField
                                        label="Content"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        margin="normal" />
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent:'center',
                                    }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                    </Box>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default PostForm;