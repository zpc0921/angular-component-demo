import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyGridComponent } from './lucky-grid.component';

describe('LuckyGridComponent', () => {
  let component: LuckyGridComponent;
  let fixture: ComponentFixture<LuckyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
