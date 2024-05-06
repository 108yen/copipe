import dayjs from "dayjs"
import ja from "dayjs/locale/ja"
import duration from "dayjs/plugin/duration"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.locale(ja)
dayjs.extend(duration)
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault(`Asia/Tokyo`)

export default dayjs
