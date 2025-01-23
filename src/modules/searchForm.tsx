"use client"
import SearchIcon from "@mui/icons-material/Search"
import {
  Button,
  Card,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@yamada-ui/react"
import { useRouter } from "next/navigation"
import * as React from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  text: string
}

export default function SearchForm() {
  const router = useRouter()
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      text: "",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    router.push(`/search?text=${encodeURIComponent(data.text)}`)
  }

  return (
    <VStack alignItems="flex-end" gap={0}>
      <Card apply="searchFormStyle.card" variant="subtle">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="text"
            render={({ field }) => (
              <InputGroup>
                <Input
                  {...field}
                  focusBorderColor="secondary"
                  id="text"
                  placeholder="search"
                />
                <InputLeftElement isClick>
                  <IconButton type="submit" variant="link">
                    <SearchIcon />
                  </IconButton>
                </InputLeftElement>
              </InputGroup>
            )}
          />
        </form>
      </Card>
      <Button
        apply="searchFormStyle.button"
        onClick={() => {
          router.push("/postForm")
        }}
        variant="link"
      >
        追加はこちらから
      </Button>
    </VStack>
  )
}
