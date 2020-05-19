import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoTasksComponent} from './todo-tasks/todo-tasks.component';
import {FindLuckyComponent} from './find-lucky/find-lucky.component';
import {TestChangeElementColorDirectiveComponent} from './components/test-change-element-color-directive/test-change-element-color-directive.component';
import {LifeComponent} from './life/life.component';
import {InteractionComponent} from './interaction/interaction.component';
import {FindLuckyPracticeComponent} from './find-lucky-practice/find-lucky-practice.component';


const routes: Routes = [
  {path: 'pipe', component: TodoTasksComponent},
  {path: 'life', component: LifeComponent},
  {path: 'find-lucky', component: FindLuckyComponent},
  {path: 'practice', component: FindLuckyPracticeComponent},
  {path: 'interaction', component: InteractionComponent},
  {path: 'directive', component: TestChangeElementColorDirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
