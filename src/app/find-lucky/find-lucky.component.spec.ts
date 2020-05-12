import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLuckyComponent } from './find-lucky.component';

describe('FindLuckyComponent', () => {
  let component: FindLuckyComponent;
  let fixture: ComponentFixture<FindLuckyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLuckyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
