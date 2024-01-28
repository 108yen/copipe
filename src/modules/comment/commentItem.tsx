import { CommentPayload } from "@/db/query";
import dayjs from "@/utils/dayjs";
import { VStack, Text } from "@yamada-ui/react";

export function CommentItem(props: { comment: CommentPayload }) {
    const { comment } = props;

    return (
        <VStack>
            <Text fontSize='sm' color='gray'>
                {`${dayjs(comment.created_at!).format('YYYY/MM/DD HH:mm:ss')}`}
            </Text>
            <Text>
                {comment.body}
            </Text>
        </VStack>
    );
}