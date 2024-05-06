export type AdmaxAdType = {
  admax_id: string // 広告ID
  type: `banner` | `switch` // PC/SP切替広告なら"switch"
}

declare global {
  // eslint-disable-next-line no-var
  var admaxads: AdmaxAdType[]
  // eslint-disable-next-line no-var
  var __admax_tag__: unknown
}
