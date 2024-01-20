import { Box, HStack, Heading, Icon, Text } from "@yamada-ui/react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";

export default function AppBar() {
    return (
        <Box as='header' bg='Background' height={65} display='flex' paddingX={5}>
            <HStack justifyContent='space-between' alignItems='center' w='full'>
                <Link
                    href='/'
                    style={{
                        textDecoration: 'none',
                        overflow: 'hidden'
                    }}
                >
                    <HStack alignItems='center'>
                        <Icon as={ContentCopyIcon} />
                        <Heading variant='h1' size='lg'>copipe</Heading>
                    </HStack>
                </Link>
                <Link
                    href='/about'
                    style={{
                        textDecoration: 'none',
                        overflow: 'hidden',
                    }}
                >
                    <Text fontSize='sm' color='gray'>このサイトについて</Text>
                </Link>
            </HStack>
        </Box>
    );
}