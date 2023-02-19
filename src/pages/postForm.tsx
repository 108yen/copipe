import supabase from "@/utils/supabase";
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogTitle, Grid, styled, TextField, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { NextPage } from "next";
import { FormEventHandler } from "react";
import { bodyFormValidateAtom, dialogStateAtom, formPropsAtom } from "./Atoms";
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
    const [dialogState, setDialogState] = useAtom(dialogStateAtom);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormProps((prev) => ({ ...prev, [id]: value }));
        if (formProps.body != '') {
            setBodyFormValidate(0);
        }
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //todo:vaidationチェックとかもうないかとかいろいろ確認したい。ポップアップも出したい
        if (formProps.body == "") {
            setBodyFormValidate(1);
        } else if (await isDupulicate(formProps.body)) {
            setBodyFormValidate(2);
        } else {
            const { data, error } = await supabase
                .from('copipe')
                .insert([
                    {
                        title: formProps.title,
                        body: formProps.body,
                    },
                ]);

            //投稿完了後の操作
            setFormProps({ title: "", body: "" });
            setDialogState(1);
        }
    }
    const handleDialogClose = () => {
        setDialogState(0);
    }
    const isDupulicate = async (body: string) => {
        const { data, error } = await supabase
            .from('copipe')
            .select()
            .eq('body', body);
        console.log(data);
        return data?.length != 0;
    }
    const bodyTextFieldHelperText = () => {
        switch (bodyFormValidate) {
            case 1:
                return '本文を入力してください';
            case 2:
                return 'すでに投稿されています';
            default:
                return '';
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
                                        value={formProps.title}
                                        fullWidth
                                        margin="normal"
                                        color='secondary'
                                        onChange={handleChange}
                                    />
                                    <ExpandableTextField
                                        id="body"
                                        label="本文"
                                        value={formProps.body}
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        maxRows={30}
                                        margin="normal"
                                        color='secondary'
                                        onChange={handleChange}
                                        error={bodyFormValidate!=0}
                                        helperText={bodyTextFieldHelperText()}
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
            <Dialog open={dialogState != 0} onClose={handleDialogClose}>
                <DialogTitle>
                    完了しました
                </DialogTitle>
                <DialogActions sx={{
                    justifyContent: "center",
                }}>
                    <Button onClick={handleDialogClose} color="secondary" autoFocus>
                        閉じる
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default PostForm;