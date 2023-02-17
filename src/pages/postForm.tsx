import { Button, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import SearchAppBar from "./modules/searchAppBar";

const PostForm: NextPage = () => {
    return (
        <>
            <SearchAppBar /><form>
                <Typography variant="h6" gutterBottom>
                    Create a new post
                </Typography>
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
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </>
    );
}

export default PostForm;