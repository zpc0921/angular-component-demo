import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../task.model';
import {TaskService} from '../task.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-task-card',
  template: `
    <nz-card style="width: 300px; margin: 16px"
             [nzTitle]="task.title"
             [nzExtra]="extraTemplate">
      <ng-template #extraTemplate>
        <nz-tag nzColor="{{task.status | optionsPipe: 'color'}}">{{task.status | optionsPipe: 'label'}}</nz-tag>
      </ng-template>
      {{task.subTitle}}
    </nz-card>
  `,
  styles: []
})
export class TaskCardComponent implements OnInit {
  @Input() task: TaskModel;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.titleChange$
      .pipe(filter((res: TaskModel) => !!res && res.id === this.task.id) )
      .subscribe(res => {
      this.task.title = res.title;
    });
  }

}
