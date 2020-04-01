import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardListComponent } from './videocard-list.component';

describe('VideocardListComponent', () => {
  let component: VideocardListComponent;
  let fixture: ComponentFixture<VideocardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
