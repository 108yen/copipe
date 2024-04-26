import { Suspense } from "react"
import LoadingRecentPostsCard from "./loading"
import RecentPostsCard from "./recentPostCard"

export default async function SuspensedRecentPostsCard() {
  return (
    <Suspense fallback={<LoadingRecentPostsCard />}>
      <RecentPostsCard />
    </Suspense>
  )
}
