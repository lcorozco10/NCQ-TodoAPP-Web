import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Models/TaskModel';
import { ResponseApi } from '../Models/ResponseModel';
import { Observable } from 'rxjs';
import { SpinnerService } from '../utils/spinner-service ';
import { ModalService } from '../utils/modal-service/modal-service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  configUrl = 'https://localhost:7291/api/v1';
  constructor(private http: HttpClient,
    public spinnerService: SpinnerService,
    public modalService: ModalService,
  ) { }

  httpGet<T>(path: string): Observable<ResponseApi<T>> {
    this.spinnerService.set(true);
    return this.http.get<ResponseApi<T>>(`${this.configUrl}/${path}`)
  }
}
