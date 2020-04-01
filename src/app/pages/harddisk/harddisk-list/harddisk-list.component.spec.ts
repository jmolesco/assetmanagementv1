import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddiskListComponent } from './harddisk-list.component';

describe('HarddiskListComponent', () => {
  let component: HarddiskListComponent;
  let fixture: ComponentFixture<HarddiskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarddiskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarddiskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
