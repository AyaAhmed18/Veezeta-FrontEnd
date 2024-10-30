import { Time, WeekDay } from "@angular/common"

export interface IBooking {
    fees:string,
    waitngTime:Time,
    StartDay:WeekDay,
    endDay:WeekDay,
    startHour:Time,
    endHour:Time,
    doctor:string

}
