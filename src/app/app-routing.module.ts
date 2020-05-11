import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoTasksComponent} from './todo-tasks/todo-tasks.component';


const routes: Routes = [
  {path: 'todo-taks', component: TodoTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
