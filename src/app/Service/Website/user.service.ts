
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) {}

  getTOPoffer(): Observable<any>
   {
  
    return this.httpclient.get<any>(`${environment.baseUrl}/api/Treatment/Get1TopTreatmentInSubspalisations`).pipe(
      map((response: any) => {
        response.entities = response.entities.map((offer: any) => {
          if (offer.image) {
            offer.imageUrls = offer.image
              .split(',')
              .map((img: string) => `${environment.baseUrl}${img.trim()}`);
          } 
          else {
            offer.imageUrls = [];
          }
          return offer;
        });
        return response;
      })
    );
  }
}
