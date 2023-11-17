import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseApi } from '../Models/ResponseModel';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export class BaseService {
  constructor(private http: HttpClient,
  ) { }

  httpGet<T>(path: string, queryParams: any = null): Observable<ResponseApi<T>> {
    const options = queryParams ?
      { params: new HttpParams({ fromObject: queryParams }) }
      : {};

    return this.http.get<ResponseApi<T>>(`${environment.apiUrl}/${path}`, options)
  }

  httpPost<T>(path: string, body: any = null): Observable<ResponseApi<T>> {
    return this.http.post<ResponseApi<T>>(`${environment.apiUrl}/${path}`, body)
  }

  httpPut<T>(path: string, body: any = null): Observable<ResponseApi<T>> {
    return this.http.put<ResponseApi<T>>(`${environment.apiUrl}/${path}`, body)
  }

  httpDelete<T>(path: string): Observable<ResponseApi<T>> {
    return this.http.delete<ResponseApi<T>>(`${environment.apiUrl}/${path}`)
  }
}
