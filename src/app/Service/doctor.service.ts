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

getAllDoctors(): Observable<any> {

  return this.httpClient.get<any>(`${this.apiUrl}/Doctor`);
}
Deletedocbyid(id: number): Observable<Doctor[]> {
  return this.httpClient.delete<Doctor[]>(`${this.apiUrl}/Doctor/delete/${id}`);
}
Getone(id: number): Observable<Doctor> {
  return this.httpClient.get<Doctor>(`${this.apiUrl}/Doctor/${id}`);
}

}
