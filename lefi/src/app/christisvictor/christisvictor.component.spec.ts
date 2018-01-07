import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristisvictorComponent } from './christisvictor.component';

describe('ChristisvictorComponent', () => {
  let component: ChristisvictorComponent;
  let fixture: ComponentFixture<ChristisvictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristisvictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristisvictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
