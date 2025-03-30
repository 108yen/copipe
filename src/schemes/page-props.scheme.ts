import { z } from "zod"

export const searchPageScheme = z.object({
  page: z
    .string()
    .regex(/^\d+$/)
    .transform((value) => Number(value))
    .catch(1),
  text: z.preprocess(
    (value) => (typeof value === "string" ? value : ""),
    z.string(),
  ),
})

export const archivesPageScheme = z
  .string()
  .regex(/^\d+$/)
  .transform((value) => Number(value))

export const tagPageScheme = z.object({
  page: z
    .string()
    .regex(/^\d+$/)
    .transform((value) => Number(value))
    .catch(1),
  tagId: z
    .string()
    .regex(/^\d+$/)
    .transform((value) => Number(value)),
})
