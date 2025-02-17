import { getHomePageCopipe } from "@/db/server/copipes"
import { HomePageTemplate } from "@/ui/templates"

export default async function Home() {
  const { copipes, count } = await getHomePageCopipe()

  return <HomePageTemplate copipes={copipes} count={count} />
}
