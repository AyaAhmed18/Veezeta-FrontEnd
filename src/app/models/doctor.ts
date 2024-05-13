import { SafeUrl } from "@angular/platform-browser"

export interface Doctor {
    id: number;
    username: string;
    title: string;
    education: string;
    email: string;
    background: string;
    phoneNumber: string;
    fees: string;
    waitingTime: Date | number;
    specialsation: string;
    country: string;
    imageBase64: string;
}
