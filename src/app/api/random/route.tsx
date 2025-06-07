import { NextResponse } from "next/server"
import getTweet from "@/utils/tweet"

export const dynamic = "force-dynamic"

export async function GET() {
  const result = await getTweet()
  return NextResponse.json(result)
}
