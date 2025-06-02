import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string;

  constructor(private http: HttpClient, public router: Router) {
    this.url = environment.apiHost + '/api/v1';
  }

  post(reqData: any, urlValue: string): Observable<any> {
    const finalUrl = this.url + urlValue;
    return this.http.post<any>(finalUrl, reqData).pipe(
      catchError((err: any): Observable<any> => {
        console.error('GET error:', err); // Optional: for debugging
        return of(null); // Better than {} — clearly indicates failure
      })
    );
  }

  get(urlValue: string): Observable<any>;
  get(urlValue: string, options: { responseType: 'text' }): Observable<string>;
  get(urlValue: string, options?: any): Observable<any> {
    const finalUrl = this.url + urlValue;
    return this.http.get(finalUrl, options).pipe(
      catchError((err: any): Observable<any> => {
        console.error('HTTP GET failed:', err);
        return of('' as any);
      })
    );
  }


  put(id: string | number, reqData: any, urlValue: string): Observable<any> {
    const finalUrl = `${this.url}${urlValue}/${id}`;
    return this.http.put<any>(finalUrl, reqData).pipe(
      catchError((err: any): Observable<any> => of({}))
    );
  }

  delete(id: string | number, urlValue: string): Observable<any> {
    const finalUrl = `${this.url}${urlValue}/${id}`;
    return this.http.delete<any>(finalUrl).pipe(
      catchError((err: any): Observable<any> => {
        console.error('GET error:', err); // Optional: for debugging
        return of(null); // Better than {} — clearly indicates failure
      }));
  }
}
