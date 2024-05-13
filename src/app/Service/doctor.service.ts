import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { 
  }

getAllDoctors( pageSize:number,pageNumber:number): Observable<Doctor[]> {
  const params = new HttpParams()
  .set('pageSize', pageSize.toString())
  .set('pageNumber', pageNumber.toString());
   return this.httpClient.get<Doctor[]>( 'http://localhost:5163/api/Doctor/GetAllDoc',{ params });    
    
}
Deletedocbyid(id: number): void {
 this.httpClient.delete<Doctor>(`${this.apiUrl}/Doctor/${id}`);
}
Getone(id: number): Observable<Doctor> {
  return this.httpClient.get<Doctor>(`${this.apiUrl}/Doctor/${id}`);
}

}
