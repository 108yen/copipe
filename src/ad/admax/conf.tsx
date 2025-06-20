export type AdmaxAdType = {
  admax_id: string // 広告ID
  type: `banner` | `switch` // PC/SP切替広告なら"switch"
}

declare global {
  var admaxads: AdmaxAdType[]
  var __admax_tag__: unknown
}
