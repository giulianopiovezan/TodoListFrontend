import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './task';
import { TaskModel } from '../../models/TaskModel'
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  async getAllTasks() : Promise<Task[]>{
    return await this.httpClient.get<Task[]>(`api/v1/tasks`).toPromise<Task[]>();
  }

  create(task : TaskModel) : Observable<Task>{
    return this.httpClient.post<Task>(`/api/v1/tasks`, task);
  }

  close(id : bigint) : Observable<{}>{
    return this.httpClient.post(`/api/v1/tasks/${id}/close`, {})
  }

  reopen(id : bigint) : Observable<{}>{
    return this.httpClient.post(`/api/v1/tasks/${id}/reopen`, {})
  }
  
  remove(id : bigint) : Observable<{}>{
    return this.httpClient.delete(`/api/v1/tasks/${id}`)
  }

  update(task : TaskModel) : Observable<Task>{
    return this.httpClient.put<Task>(`/api/v1/tasks/${task.id}`, task)
  }
}