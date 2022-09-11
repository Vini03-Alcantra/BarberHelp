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

    convertFromDateToTime(date: Date, serviceDuration: number): Date {
        let hourInit = new Date(date)
        const hourClose = new Date(hourInit.getTime() + serviceDuration * 60 * 1000)
        return hourClose
    }   
}

export {DayjsDateProvider}