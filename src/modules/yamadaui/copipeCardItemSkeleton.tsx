import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Divider, HStack, Icon, IconButton, Skeleton, SkeletonText, Spacer } from "@yamada-ui/react";

export function CopipeCardItemSkelton() {
    return (
        <Box m={{ sm: 1, base: 2 }} paddingY={1} width='full' gap='md'>
            <HStack>
                <Skeleton h={10} marginY={1} />
                <Spacer />
                <IconButton
                    color="secondary"
                    variant='ghost'
                    aria-label="copy"
                    size="xs"
                    icon={<Icon as={ContentCopyIcon} size='xl' />}
                />
            </HStack>
            <Skeleton w={100} marginY={1} />
            <Divider />
            <SkeletonText marginY={3} lineClamp={5} textHeight={5}/>
        </Box>
    );
}