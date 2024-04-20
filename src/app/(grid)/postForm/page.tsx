import CopipePostForm from "@/modules/copipePostForm";
import { postNewCopipe } from "./serverActions";
import { Container } from "@yamada-ui/react";

export const metadata = {
    title: "投稿フォーム",
};

export default function Page() {
    return (
        <Container>
            <CopipePostForm postNewCopipe={postNewCopipe} />
        </Container>
    );
}
