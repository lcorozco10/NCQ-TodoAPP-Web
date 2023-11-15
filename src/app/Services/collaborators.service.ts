import { Injectable } from '@angular/core';
import { BaseService } from './basse.service';
import { HttpClient } from '@angular/common/http';
import { CollboratorModel } from '../Models/Collaborator.model';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<ResponseApi<CollboratorModel[]>> {
    return this.httpGet<CollboratorModel[]>("Collaborator");
  }
}
