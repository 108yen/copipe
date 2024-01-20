import { CopipeComment } from "@/models/comment";
import dayjs from "@/utils/dayjs";
import { ListItem, VStack, Text } from "@yamada-ui/react";

export function CommentItem(props: { comment: CopipeComment }) {
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