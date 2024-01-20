import CopipeSubmitForm from "./copipeSubmitForm";
import CopipeCard from "@/modules/mui/copipeCard";

export const metadata = {
    title: '投稿フォーム'
}

export default function Page() {
    return (
        <CopipeCard>
            <CopipeSubmitForm />
        </CopipeCard>
    );
}