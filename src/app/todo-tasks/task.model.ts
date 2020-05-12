export enum TaskStatus {
  TODO = 0,
  DOING,
  DONE,
  DELETED
}

export const TaskStatusOptionn = [
  {value: TaskStatus.TODO, label: '待办', color: 'red'},
  {value: TaskStatus.DOING, label: '处理中', color: 'green'},
  {value: TaskStatus.DONE, label: '已完成', color: 'gray'},
  {value: TaskStatus.DELETED, label: '已删除', color: 'gray'},
];

export interface TaskModel {
  id: number;
  title: string;
  deadline: Date;
  status: TaskStatus;
  subTitle?: string;
}
