import supabase from "@/utils/supabase";
import { Box, Button, Card, CardContent, Grid, styled, TextField, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { NextPage } from "next";
import { FormEventHandler } from "react";
import { bodyFormValidateAtom, formPropsAtom } from "./Atoms";
import SearchAppBar from "./modules/searchAppBar";

const ExpandableTextField = styled(TextField)(({ theme }) => ({
    '& > textarea': {
        lineHeight: 1.5,
        overflow: 'hidden',
    },
}));

const PostForm: NextPage = () => {
    const [formProps, setFormProps] = useAtom(formPropsAtom);
    const [bodyFormValidate, setBodyFormValidate] = useAtom(bodyFormValidateAtom);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormProps((prev) => ({ ...prev, [id]: value }));
        if (formProps.body != '') {
            setBodyFormValidate(true);
        }
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //todo:vaidationチェックとかもうないかとかいろいろ確認したい。ポップアップも出したい
        if (formProps.body == "") {
            setBodyFormValidate(false);
        } else {
            //!一旦オフ
            // const { data, error } = await supabase
            //     .from('copipe')
            //     .insert([
            //         {
            //             title: formProps.title,
            //             body: formProps.body,
            //         },
            //     ]);
        }
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
                                        label="タイトル"
                                        fullWidth
                                        margin="normal"
                                        color='secondary'
                                        onChange={handleChange}
                                    />
                                    <ExpandableTextField
                                        id="body"
                                        label="本文"
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        maxRows={30}
                                        margin="normal"
                                        color='secondary'
                                        onChange={handleChange}
                                        error={!bodyFormValidate}
                                        helperText={bodyFormValidate ? "" : "本文を入力してください"}
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