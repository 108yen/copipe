import CopipeCard from "@/modules/copipeCard";
import CopipePostForm from "@/modules/copipePostForm";
import { postNewCopipe } from "./serverActions";

export const metadata = {
    title: '投稿フォーム'
}

export default function Page() {
    return (
        <CopipeCard>
            <CopipePostForm postNewCopipe={postNewCopipe}/>
        </CopipeCard>
    );
}