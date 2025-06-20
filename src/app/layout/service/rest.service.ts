import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestService {
//   url: string;

//   // Default headers with Content-Type application/json
//   private jsonHeaders = new HttpHeaders({
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json'

//   });

//   constructor(private http: HttpClient, public router: Router) {
//     this.url = environment.apiHost + '/api/v1';
//     // this.url = '/api/v1';

//   }

//   post(reqData: any, urlValue: string): Observable<any> {
//     const finalUrl = this.url + urlValue;
//     return this.http.post<any>(finalUrl, reqData, { headers: this.jsonHeaders }).pipe(
//       catchError((err: any): Observable<any> => {
//         console.error('POST error:', err);
//         return of(null);
//       })
//     );
//   }

//   get(urlValue: string): Observable<any>;
//   get(urlValue: string, options: { responseType: 'text' }): Observable<string>;
//   get(urlValue: string, options?: any): Observable<any> {
//     const finalUrl = this.url + urlValue;

//     // Merge headers if options exist or set default headers
//     const httpOptions = {
//       headers: this.jsonHeaders,
//       ...options
//     };

//     return this.http.get(finalUrl, httpOptions).pipe(
//       catchError((err: any): Observable<any> => {
//         console.error('HTTP GET failed:', err);
//         return of('' as any);
//       })
//     );
//   }

//   put(id: string | number, reqData: any, urlValue: string): Observable<any> {
//     const finalUrl = `${this.url}${urlValue}/${id}`;
//     return this.http.put<any>(finalUrl, reqData, { headers: this.jsonHeaders }).pipe(
//       catchError((err: any): Observable<any> => of({}))
//     );
//   }

//   delete(id: string | number, urlValue: string): Observable<any> {
//     const finalUrl = `${this.url}${urlValue}/${id}`;
//     return this.http.delete<any>(finalUrl, { headers: this.jsonHeaders }).pipe(
//       catchError((err: any): Observable<any> => {
//         console.error('DELETE error:', err);
//         return of(null);
//       })
//     );
//   }
// }
@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string;

  constructor(private http: HttpClient, public router: Router) {
    this.url = environment.apiHost + '/api/v1';
  }

  private getHeaders(): HttpHeaders {
    const userRole = localStorage.getItem('userRole') || '';
    const token = localStorage.getItem('authToken') || '';
    console.log('User Role:', userRole);
    // fallback if not set
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'userId': userRole,
      'Authorization': `Token ${token}`

    });
  }

  post(reqData: any, urlValue: string,resType?:any): Observable<any> {
    const finalUrl = this.url + urlValue;
    return this.http.post<any>(finalUrl, reqData, { headers: this.getHeaders(), responseType:resType }).pipe(
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

    let headers = this.getHeaders();

    // If the caller passes additional headers, merge them
    if (options?.headers) {
      for (const key of options.headers.keys()) {
        headers = headers.set(key, options.headers.get(key));
      }
    }

    // Replace or keep other options
    const httpOptions = {
      ...options,
      headers
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
    return this.http.put<any>(finalUrl, reqData, { headers: this.getHeaders() }).pipe(
      catchError((err: any): Observable<any> => of({}))
    );
  }

  delete(id: any, urlValue: string): Observable<any> {
    const finalUrl = `${this.url}${urlValue}/${id}`;
    return this.http.delete<any>(finalUrl, { headers: this.getHeaders() }).pipe(
      catchError((err: any): Observable<any> => {
        console.error('DELETE error:', err);
        return of(null);
      })
    );
  }
}

