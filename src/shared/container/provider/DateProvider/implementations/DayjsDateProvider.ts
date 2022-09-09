import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { IDateProvider } from "../IDateProvider"

dayjs.extend(utc)

class DayjsDateProvider implements IDateProvider {
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format()
    }
    
    dateNow(): Date {
        return dayjs().toDate()
    }

}

export {DayjsDateProvider}