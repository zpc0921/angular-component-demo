import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLuckyPracticeComponent } from './find-lucky-practice.component';

describe('FindLuckyPracticeComponent', () => {
  let component: FindLuckyPracticeComponent;
  let fixture: ComponentFixture<FindLuckyPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLuckyPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLuckyPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
