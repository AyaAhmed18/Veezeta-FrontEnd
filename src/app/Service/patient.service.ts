
import { IPatients } from '../models/IPatients';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appointement } from '../models/appointement';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }
  
  getAllPatients(pageSize: number, pageNumber: number): Observable<any> 
  {
    
       return this.httpclient.get<any>(`${environment.baseUrl}/api/Patient/AllPatients/${pageSize}/${pageNumber}`);
  }
   
  deletepatient(id: string): Observable<any> 
  {
    return this.httpclient.delete<any>(`${environment.baseUrl}/api/Patient/${id}`);
  }  

  blockpatient(id: string): Observable<any>
  {
    return this.httpclient.delete<any>(`${environment.baseUrl}/api/Patient/Block/${id}`);
  }

}