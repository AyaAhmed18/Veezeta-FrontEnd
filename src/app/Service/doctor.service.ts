import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDoctor } from '../models/idoctor';
import { Observable } from 'rxjs';
import { AnimationStyleMetadata } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpclient:HttpClient) { }

  GetPagenatedDoctor(items: number, pageNumber: number): Observable<any> {
    let params = new HttpParams()
      .append('items', items.toString())
      .append('pageNumber', pageNumber.toString());
      return this.httpclient.get<IDoctor[]>(`http://localhost:46580/api/Doctor/AllDoctorPages/${items}/${pageNumber}`, { params });    
      
  }
  GetDoctorById(id:string):Observable<any>{
    let params = new HttpParams()
    .append('id', id.toString())
    
    return this.httpclient.get<IDoctor[]>(`http://localhost:46580/api/Doctor/${id}`, { params });    

  }

 
  ApproveDoctor(id:string):Observable<any>{
   // let params = new HttpParams()
    return this.httpclient.put<any>(`http://localhost:46580/api/Doctor/ApproveDoctor/${id}`,id);    

  }

  AllDisApprovedDoctorPages(items:number,pageNumber:number):Observable<any>{
    let params = new HttpParams()
    .append('items', items.toString())
    .append('pageNumber', pageNumber.toString());
     return this.httpclient.get<IDoctor[]>(`http://localhost:46580/api/Doctor/AllDisApprovedDoctorPages/${items}/${pageNumber}`, { params });    

   }

   

}
