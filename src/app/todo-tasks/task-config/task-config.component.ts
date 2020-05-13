import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-config',
  template: `
    <div style="width: 500px">
      <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate" [nzAddOnAfter]="addOnAfterTemplate">
        <input type="text" nz-input [(ngModel)]="inputValue"/>
      </nz-input-group>
      <ng-template #addOnBeforeTemplate>
        <nz-select [(ngModel)]="id" style="width: 100px" nzPlaceHolder="选择任务"
                   (ngModelChange)="slectChange($event)">
          <nz-option *ngFor="let task of tasks"
                     [nzLabel]="task.id"
                     [nzValue]="task.id"
          ></nz-option>
        </nz-select>
      </ng-template>
      <ng-template #addOnAfterTemplate>
        <button nz-button nzType="primary" nzSize="small" nzSearch (click)="saveTitle(inputValue)">修改</button>
      </ng-template>
    </div>
  `,
  styles: []
})
export class TaskConfigComponent implements OnInit {
  @Input() tasks: TaskModel[];
  id: number;
  inputValue: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  saveTitle(inputValue: string) {
    this.taskService.setTitle({id: this.id, title: this.inputValue} as TaskModel);
  }

  slectChange($event: any) {
    console.log($event)
    this.inputValue = this.tasks.find(it => it.id === $event).title;
  }
}
