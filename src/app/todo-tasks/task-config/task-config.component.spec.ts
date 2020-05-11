import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskConfigComponent } from './task-config.component';

describe('TaskConfigComponent', () => {
  let component: TaskConfigComponent;
  let fixture: ComponentFixture<TaskConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
