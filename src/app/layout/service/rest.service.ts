import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string;

  // Default headers with Content-Type application/json
  private jsonHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'

  });

  constructor(private http: HttpClient, public router: Router) {
    this.url = environment.apiHost + '/api/v1';
    // this.url = '/api/v1';

  }

  post(reqData: any, urlValue: string): Observable<any> {
    const finalUrl = this.url + urlValue;
    return this.http.post<any>(finalUrl, reqData, { headers: this.jsonHeaders }).pipe(
      catchError((err: any): Observable<any> => {
        console.error('POST error:', err);
        return of(null);
      })
    );
  }

  get(urlValue: string): Observable<any>;
  get(urlValue: string, options: { responseType: 'text' }): Observable<string>;
  get(urlValue: string, options?: any): Observable<any> {
    const finalUrl = this.url + urlValue;

    // Merge headers if options exist or set default headers
    const httpOptions = {
      headers: this.jsonHeaders,
      ...options
    };

    return this.http.get(finalUrl, httpOptions).pipe(
      catchError((err: any): Observable<any> => {
        console.error('HTTP GET failed:', err);
        return of('' as any);
      })
    );
  }

  put(id: string | number, reqData: any, urlValue: string): Observable<any> {
    const finalUrl = `${this.url}${urlValue}/${id}`;
    return this.http.put<any>(finalUrl, reqData, { headers: this.jsonHeaders }).pipe(
      catchError((err: any): Observable<any> => of({}))
    );
  }

  delete(id: string | number, urlValue: string): Observable<any> {
    const finalUrl = `${this.url}${urlValue}/${id}`;
    return this.http.delete<any>(finalUrl, { headers: this.jsonHeaders }).pipe(
      catchError((err: any): Observable<any> => {
        console.error('DELETE error:', err);
        return of(null);
      })
    );
  }
}
