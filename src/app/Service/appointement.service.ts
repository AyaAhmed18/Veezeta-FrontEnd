
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appointement } from '../models/appointement';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  constructor(private httpclient: HttpClient) {}
  private baseUrl = 'http://localhost:5029/api/Appointment';

  getAllAppointments(pageSize: number, pageNumber: number): Observable<any> 
  {
    let params = new HttpParams()
      .append('pageSize', pageSize.toString())
      .append('pageNumber', pageNumber.toString());

    return this.httpclient.get<any>(`${environment.baseUrl}/api/Appointment`, { params });
  }
  
  
  deleteAppointment(id: string): Observable<any> 
  {
    return this.httpclient.delete<any>(`${environment.baseUrl}/api/Appointment/${id}`);
  }
  createAppointment(appointementData: appointement): Observable<appointement> 
  {
    return this.httpclient.post<appointement>(`${this.baseUrl}`, appointementData);
  }
}
