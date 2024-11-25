import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://api.geonames.org/searchJSON?country=EG&featureClass=P&maxRows=1000&username=ayaahmed';

  // private headers = new HttpHeaders({
  //   'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
  //   'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  // });

  constructor(private http: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
