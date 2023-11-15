import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../Models/ResponseModel';
import { Observable } from 'rxjs';

/*@Injectable({
  providedIn: 'root',
})*/
export class BaseService {
  configUrl = 'https://localhost:7291/api/v1';
  constructor(private http: HttpClient,
  ) { }

  httpGet<T>(path: string, queryParams: any = null): Observable<ResponseApi<T>> {
    const options = queryParams ?
      { params: new HttpParams({ fromObject: queryParams }) }
      : {};

    return this.http.get<ResponseApi<T>>(`${this.configUrl}/${path}`, options)
  }

  httpPost<T>(path: string, body: any = null): Observable<ResponseApi<T>> {
    return this.http.post<ResponseApi<T>>(`${this.configUrl}/${path}`, body)
  }

  httpPut<T>(path: string, body: any = null): Observable<ResponseApi<T>> {
    return this.http.put<ResponseApi<T>>(`${this.configUrl}/${path}`, body)
  }

  httpDelete<T>(path: string): Observable<ResponseApi<T>> {
    return this.http.delete<ResponseApi<T>>(`${this.configUrl}/${path}`)
  }
}
