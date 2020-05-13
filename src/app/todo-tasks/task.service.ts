import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {TaskModel} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private titleSource = new Subject<TaskModel>();
  titleChange$ = this.titleSource.asObservable();

  constructor() { }

  setTitle(value: TaskModel) {
    this.titleSource.next(value);
  }
}
