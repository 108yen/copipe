import { NextResponse } from "next/server"
import getTweet from "@/utils/tweet"

export async function GET() {
  const result = await getTweet()
  return NextResponse.json(result)
}
