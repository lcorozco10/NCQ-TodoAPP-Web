import { Injectable } from '@angular/core';
import { BaseService } from './basse.service';
import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../Models/ResponseModel';
import { CreateUpdateTask, Task, TaskFilter } from '../Models/TaskModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAllTask(filter: TaskFilter | null | undefined = null): Observable<ResponseApi<Task[]>> {
    return this.httpGet<Task[]>("Tasks", filter);
  }

  create(body: CreateUpdateTask): Observable<ResponseApi<Task[]>> {
    return this.httpPost<Task[]>("Tasks", body);
  }

  edit(id: string, body: CreateUpdateTask): Observable<ResponseApi<Task[]>> {
    return this.httpPut<Task[]>(`Tasks/${id}`, body);
  }

  delete(id: string): Observable<ResponseApi<Task[]>> {
    return this.httpDelete<Task[]>(`Tasks/${id}`);
  }
}
