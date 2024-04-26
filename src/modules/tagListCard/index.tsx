import { Suspense } from "react"
import TagListCard from "./tagListCard"
import LoadingTagListCard from "./loading"

export default function SuspensedTagListCard() {
  return (
    <Suspense fallback={<LoadingTagListCard />}>
      <TagListCard />
    </Suspense>
  )
}
