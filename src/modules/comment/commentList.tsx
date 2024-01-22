import { CopipeComment } from "@/models/comment";
import { Divider, VStack } from "@yamada-ui/react";
import { CommentItem } from "./commentItem";

export function CommentList(props: { comments: CopipeComment[] }) {
    const { comments } = props;

    return (
        <VStack divider={<Divider />}>
            {comments.map((comment) =>
                <CommentItem key={comment.id} comment={comment} />
            )}
        </VStack>
    )
}