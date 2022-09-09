interface IDateProvider {
    convertToUTC(date: Date): string;
    dateNow(): Date;
    convertFromDateToTime(date: Date, serviceDuration: number): Date;
}

export {IDateProvider}