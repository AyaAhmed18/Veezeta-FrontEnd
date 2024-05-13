// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from '../../environments/environment.development';
// import { Observable } from 'rxjs';
// import { IPatients } from '../models/IPatients';
// import { AppComponent } from '../app.component';
// import { HttpClientModule } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientService {

//   constructor(private httpclient:HttpClient) { }

// getAllPatients(pageSize: number, pageNumber: number): Observable<IPatients[]> {
//   let params = new HttpParams()
//   .append('pageSize', pageSize.toString())
//   .append('pageNumber', pageNumber.toString());

//   return this.httpclient.get<IPatients[]>(`${environment.baseUrl}/Patient/GettAllPatients`, { params });
// }
  
// }
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IPatients } from '../models/IPatients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }

  

  getAllPatients(pageSize: number, pageNumber: number): Observable<IPatients[]> {
    let params = new HttpParams()
      .append('pageSize', pageSize.toString())
      .append('pageNumber', pageNumber.toString());
      return this.httpclient.get<IPatients[]>(`http://localhost:5163/api/Patient/GettAllPatients`, { params });    
      // return this.httpclient.get<IPatients[]>(`${environment.baseUrl}/api/Patient/GettAllPatients`, { params });
  
  }
}