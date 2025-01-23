import { Suspense } from "react"

import LoadingRecentPostsCard from "./loading"
import RecentPostsCard from "./recentPostCard"

export default async function SuspendedRecentPostsCard() {
  return (
    <Suspense fallback={<LoadingRecentPostsCard />}>
      <RecentPostsCard />
    </Suspense>
  )
}
