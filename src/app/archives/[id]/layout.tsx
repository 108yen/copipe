import { fetchCopipe } from "@/db/server/copipes"
import { ReactNode } from "react"

export async function generateMetadata(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const { id } = params
  const copipe = await fetchCopipe(Number(id))

  return {
    title: copipe.title,
  }
}

export default async function layout({ children }: { children: ReactNode }) {
  return <section>{children}</section>
}
