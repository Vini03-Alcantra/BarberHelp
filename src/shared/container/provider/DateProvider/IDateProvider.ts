interface IDateProvider {
    convertToUTC(date: Date): string;
    dateNow(): Date;
}

export {IDateProvider}