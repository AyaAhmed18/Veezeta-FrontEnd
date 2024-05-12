import { SafeUrl } from "@angular/platform-browser"

export interface Doctor {
    phonenumber : string
    username:string
    id:string
    image:SafeUrl
    email:string
    title:string
    education:string
    country:string,
    speciallize:string,
    gender:boolean,
    fees:string,
    background:string
}
