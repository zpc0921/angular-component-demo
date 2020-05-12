import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoTasksComponent} from './todo-tasks/todo-tasks.component';
import {FindLuckyComponent} from './find-lucky/find-lucky.component';
import {TestChangeElementColorDirectiveComponent} from './components/test-change-element-color-directive/test-change-element-color-directive.component';


const routes: Routes = [
  {path: 'todo-tasks', component: TodoTasksComponent},
  {path: 'find-lucky', component: FindLuckyComponent},
  {path: 'test-directive', component: TestChangeElementColorDirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
