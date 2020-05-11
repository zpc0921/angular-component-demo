import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ChangeElementStyleDirective} from './directives/change-element-style.directive';
import {TestChangeElementColorDirectiveComponent} from './components/test-change-element-color-directive/test-change-element-color-directive.component';
import {TodoTasksComponent} from './todo-tasks/todo-tasks.component';
import {TaskCardComponent} from './todo-tasks/task-card/task-card.component';
import {TaskConfigComponent} from './todo-tasks/task-config/task-config.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ChangeElementStyleDirective,
    TestChangeElementColorDirectiveComponent,
    AppComponent,
    TodoTasksComponent,
    TaskCardComponent,
    TaskConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
