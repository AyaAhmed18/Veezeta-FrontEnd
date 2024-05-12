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
//     GetallDoctors(username:string, email: string,phone:number,img:SafeUrl,title:string ,education:string,id:string) {
//       const Doctordetails = { username, email ,phone,img,title,education,id };
//       return this.httpClient.post<any>(`${this.apiUrl}/Doctor/Getall`, Doctordetails)   
// }
getAllDoctors(pageSize: number, pageNumber: number): Observable<any> {
  const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('pageNumber', pageNumber.toString());
  return this.httpClient.get<any>(`${this.apiUrl}/Doctor`, { params});
}
Deletedocbyid(id: number): Observable<Doctor> {
  return this.httpClient.delete<Doctor>(`${this.apiUrl}/Doctor/delete/${id}`);
}

}
