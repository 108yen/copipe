import { prisma } from "@/db/db"
import { notFound } from "next/navigation"
import { ReactNode } from "react"

export async function generateMetadata({ params }: { params: { tagId: string } }) {
    const tagId = Number(params.tagId)

    const tag = await prisma.tag.findUniqueOrThrow({
        where: { id: tagId },
        select: { body: true }
    }).catch(e => {
        notFound()
    })

    return {
        title: tag.body
    }
}

export default async function layout({ children }: {
    children: ReactNode
}) {
    return <section>{children}</section>
}