import { Prisma } from "@prisma/client"

export const copipeWithTag = {
  id: true,
  title: true,
  body: true,
  copipeToTag: {
    select: {
      tag: {
        select: {
          id: true,
          body: true,
        },
      },
    },
  },
} satisfies Prisma.copipeSelect

export type CopipeWithTagPayload = Prisma.copipeGetPayload<{
  select: typeof copipeWithTag
}>

export const copipeWithTagComment = {
  ...copipeWithTag,
  comments: true,
} satisfies Prisma.copipeSelect

export type CopipeWithTagCommentPayload = Prisma.copipeGetPayload<{
  select: typeof copipeWithTagComment
}>

export type CommentsPayload = CopipeWithTagCommentPayload["comments"]

export type CommentPayload = CommentsPayload[number]

export type TagPayload = Prisma.tagGetPayload<{}>
