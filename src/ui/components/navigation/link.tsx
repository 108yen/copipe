"use client"

import { Merge, Text, TextProps } from "@yamada-ui/react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface LinkProps extends Merge<NextLinkProps, TextProps> {
  [key: string]: any
}

export function Link(props: LinkProps) {
  return <Text as={NextLink} {...props} />
}
