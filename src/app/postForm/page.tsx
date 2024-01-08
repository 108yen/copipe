import { Card, CardContent } from "@mui/material";
import CopipeSubmitForm from "./copipeSubmitForm";

export const metadata = {
    title: '投稿フォーム'
}

export default function Page() {
    return (
        <Card>
            <CardContent>
                <CopipeSubmitForm />
            </CardContent>
        </Card>
    );
}