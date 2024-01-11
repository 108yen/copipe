import CopipeSubmitForm from "./copipeSubmitForm";
import CopipeCard from "@/modules/copipeCard";

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