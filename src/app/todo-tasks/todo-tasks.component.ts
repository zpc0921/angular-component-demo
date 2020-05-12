import {Component, OnInit} from '@angular/core';
import {TaskModel, TaskStatus} from './task.model';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})
export class TodoTasksComponent implements OnInit {
  tasks: TaskModel[] = [
    {id: 111, title: '吃早饭', deadline: new Date(new Date().setHours(8, 30)), status: TaskStatus.DONE},
    {id: 222, title: '吃中饭', deadline: new Date(new Date().setHours(12, 30)), status: TaskStatus.DELETED},
    {id: 333, title: '吃晚饭', deadline: new Date(new Date().setHours(18, 30)), status: TaskStatus.TODO},
    {id: 444, title: '上班', deadline: new Date(new Date().setHours(21, 30)), status: TaskStatus.DOING},
  ];

  constructor() { }

  ngOnInit() {
  }

}
