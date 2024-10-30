import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from '../models/ibooking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpclient:HttpClient) { }

  GetDoctorBook(DoctorId:string): Observable<any> {
    let params = new HttpParams()
    .append('items', DoctorId.toString())
      return this.httpclient.get<IBooking[]>(`http://localhost:46580/api/Booking/${DoctorId}`);    
      
  }
}
