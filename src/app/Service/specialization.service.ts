import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISpecialization } from '../models/ispecialization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private httpclient:HttpClient) { }

  GetAllSpecialization(): Observable<any> {
      return this.httpclient.get<ISpecialization[]>(`http://localhost:46580/api/Specialization`);    
      
  }
}
