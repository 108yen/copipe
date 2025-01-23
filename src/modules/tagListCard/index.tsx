import { Suspense } from "react"

import LoadingTagListCard from "./loading"
import TagListCard from "./tagListCard"

export default function SuspensedTagListCard() {
  return (
    <Suspense fallback={<LoadingTagListCard />}>
      <TagListCard />
    </Suspense>
  )
}
