import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficConfigurationModalComponent } from './traffic-configuration-modal.component';

describe('TrafficConfigurationModalComponent', () => {
  let component: TrafficConfigurationModalComponent;
  let fixture: ComponentFixture<TrafficConfigurationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficConfigurationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficConfigurationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
