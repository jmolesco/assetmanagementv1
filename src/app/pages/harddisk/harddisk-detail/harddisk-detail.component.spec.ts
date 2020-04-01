import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddiskDetailComponent } from './harddisk-detail.component';

describe('HarddiskDetailComponent', () => {
  let component: HarddiskDetailComponent;
  let fixture: ComponentFixture<HarddiskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarddiskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarddiskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
