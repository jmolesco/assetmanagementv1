import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardDetailComponent } from './videocard-detail.component';

describe('VideocardDetailComponent', () => {
  let component: VideocardDetailComponent;
  let fixture: ComponentFixture<VideocardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
