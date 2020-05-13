import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../task.model';

@Component({
  selector: 'app-task-card',
  template: `
    <nz-card style="width: 300px; margin: 16px"
             [nzTitle]="task.title"
             [nzExtra]="extraTemplate">
      <ng-template #extraTemplate>
        <nz-tag nzColor="{{'red'}}">{{'已完成'}}</nz-tag>
      </ng-template>
      {{task.subTitle}}
    </nz-card>
  `,
  styles: []
})
export class TaskCardComponent implements OnInit {
  @Input() task: TaskModel;

  constructor() { }

  ngOnInit() {

  }

}
