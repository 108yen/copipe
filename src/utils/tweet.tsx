import supabase from "./supabase"

export default async function getTweet() {
  const { data, error } = await supabase.rpc("get_random_copipe")
  if (error) console.log(`get random copipe error: ${error}`)
  else console.log("get random copipe")
  const copipe: { body: string; id: number; } = {
    body: data[0].body,
    id: data[0].id,
  }
  const url = `https://www.netcopipe.com/archives/${copipe.id}`
  const text = reductionText(copipe.body, url)

  return { text, url }
}

function reductionText(text: string, url: string) {
  let reductionCount = 0
  while (
    !checkTweetLength(`${text.slice(0, text.length - reductionCount)}...${url}`)
  ) {
    reductionCount++
  }
  return reductionCount == 0
    ? `${text.slice(0, text.length - reductionCount)}`
    : `${text.slice(0, text.length - reductionCount)}...`
}

function countCharacters(text: string): {
  fullWidth: number
  halfWidth: number
} {
  let fullWidth = 0
  let halfWidth = 0
  for (const char of text) {
    // 全角文字かどうかを判定
    // eslint-disable-next-line no-control-regex
    if (char.match(/[^\x01-\x7E\xA1-\xDF]/)) {
      fullWidth += 2
    } else {
      halfWidth += 1
    }
  }

  return { fullWidth, halfWidth }
}

function checkTweetLength(text: string): boolean {
  const { fullWidth, halfWidth } = countCharacters(text)
  const totalCharacters = fullWidth + halfWidth
  return fullWidth <= 140 && totalCharacters <= 280
}
