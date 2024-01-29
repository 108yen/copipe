import { Button, Divider, SkeletonText, Text, Textarea, VStack } from "@yamada-ui/react";
import CopipeCard from "../copipeCard";

export default function LoadingComment() {
  return (
    <CopipeCard>
      <VStack divider={<Divider />}>
        {[...Array(3)].map((value) => (
          <VStack key={`comments-skelton-${value}`}>
            <Text fontSize='sm' color='gray'>
              <SkeletonText lineClamp={1} width={120} />
            </Text>
            <Text>
              <SkeletonText />
            </Text>
          </VStack>
        ))}
      </VStack>
      <VStack
        alignItems='center'
        w='full'
      >
        <Textarea
          id="body"
          placeholder="コメント"
          focusBorderColor='secondary'
          disabled
        />
        <Button
          variant='outline'
          color="secondary"
          borderColor='secondary'
          w='fit-content'
          disabled
        >
          コメント
        </Button>
      </VStack>
    </CopipeCard>
  )
}