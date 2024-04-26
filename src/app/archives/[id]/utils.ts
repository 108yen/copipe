import { getCopipeIds } from "@/db/server/copipes"

export async function checkBeforeAndAfterPage(currendId: number) {
  const data = await getCopipeIds()

  const copipeIds: number[] = data.map((value) => value.id)
  const currentIdIndex = copipeIds.findIndex((value) => value == currendId)
  const beforeId = currentIdIndex == 0 ? -1 : copipeIds[currentIdIndex - 1]
  const afterId =
    currentIdIndex == copipeIds.length - 1 ? -1 : copipeIds[currentIdIndex + 1]

  return { beforeId, afterId }
}
