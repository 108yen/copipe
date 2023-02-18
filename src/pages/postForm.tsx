import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { NextPage } from "next";
import { FormEventHandler } from "react";
import { formPropsAtom } from "./Atoms";
import SearchAppBar from "./modules/searchAppBar";


const PostForm: NextPage = () => {
    const [formProps, setFormProps] = useAtom(formPropsAtom);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormProps((prev) => ({ ...prev, [id]: value }));
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formProps);
    }

    return (
        <>
            <SearchAppBar />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Card>
                            <CardContent>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        id="title"
                                        label="Title"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        id="body"
                                        label="Content"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        margin="normal"
                                        onChange={handleChange}
                                    />
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
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