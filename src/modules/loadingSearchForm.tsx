import { Button, Card, Input, InputGroup, InputLeftElement, Loading, VStack } from "@yamada-ui/react";

export default function LoadingSearchForm(props: { text?: string }) {
    const { text } = props;

    return (
        <VStack alignItems='flex-end' gap={0}>
            <Card
                position='sticky'
                top={0}
                zIndex={100}
                variant='subtle'
                bg='white'
                w='full'
            >
                <InputGroup>
                    <InputLeftElement>
                        <Loading variant="dots" color='secondary' />
                    </InputLeftElement>
                    <Input
                        focusBorderColor='secondary'
                        id='text'
                        isReadOnly
                        value={text}
                    />
                </InputGroup>
            </Card>
            <Button
                fontWeight='normal'
                color='gray'
                variant='link'
                size='xs'
                w='fit-content'
                disabled
            >
                追加はこちらから
            </Button>
        </VStack>
    );
}