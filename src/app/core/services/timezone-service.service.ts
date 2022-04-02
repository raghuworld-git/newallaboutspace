import { Injectable } from "@angular/core";
import * as dayjs from 'dayjs';
import * as utc from "dayjs/plugin/utc";
import * as timezone from "dayjs/plugin/timezone";

@Injectable({
    providedIn: "root"
})
export class TimeZoneService {
    constructor() {
        dayjs.extend(utc);
        dayjs.extend(timezone);
    }

    getBrowserTimeZone(): string {
        return dayjs.tz.guess();
    }
}