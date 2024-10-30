import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { review } from '../models/review';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpclient: HttpClient) {}
 // private baseUrl = `${environment.baseUrl}/api/Review`;

  GetAllReviews(pageSize: number, pageNumber: number): Observable<any> 
  {
    let params = new HttpParams()
      .append('pageSize', pageSize.toString())
      .append('pageNumber', pageNumber.toString());

    return this.httpclient.get<any>(`${environment.baseUrl}/api/Review/GettAllReviews`, { params });
  }
  
  
  deletereview(id: string): Observable<any> 
  {
    return this.httpclient.delete<any>(`${environment.baseUrl}/api/Review/${id}`);
  }
  GethightReviews(pageSize: number, pageNumber: number): Observable<any> 
  {
    let params = new HttpParams()
      .append('pageSize', pageSize.toString())
      .append('pageNumber', pageNumber.toString());

    return this.httpclient.get<any>(`${environment.baseUrl}/api/Review/GetHighRate`, { params });
  }
  // createAppointment(appointementData: appointement): Observable<appointement> 
  // {
  //   return this.httpclient.post<appointement>(`${this.baseUrl}`, appointementData);
  // }
}
