export function checkBeforeAndAfterPage(
  ids: { id: number }[],
  currentId: number,
) {
  const copipeIds: number[] = ids.map((value) => value.id)
  const currentIdIndex = copipeIds.findIndex((value) => value == currentId)
  const beforeId = currentIdIndex == 0 ? -1 : copipeIds[currentIdIndex - 1]
  const afterId =
    currentIdIndex == copipeIds.length - 1 ? -1 : copipeIds[currentIdIndex + 1]

  return { afterId, beforeId }
}
