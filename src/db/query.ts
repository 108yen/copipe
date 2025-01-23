import { Prisma } from "@prisma/client"

export const copipeWithTag = {
  body: true,
  copipeToTag: {
    select: {
      tag: {
        select: {
          body: true,
          id: true,
        },
      },
    },
  },
  id: true,
  title: true,
} satisfies Prisma.copipeSelect

export type CopipeWithTagPayload = Prisma.copipeGetPayload<{
  select: typeof copipeWithTag
}>

export const copipeWithTagComment = {
  ...copipeWithTag,
  comments: true,
} satisfies Prisma.copipeSelect

export type CommentPayload = CommentsPayload[number]

export type CommentsPayload = CopipeWithTagCommentPayload["comments"]

export type CopipeWithTagCommentPayload = Prisma.copipeGetPayload<{
  select: typeof copipeWithTagComment
}>

export type TagPayload = Prisma.tagGetPayload<{}>
