import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDoctorComponent } from './approve-doctor.component';

describe('ApproveDoctorComponent', () => {
  let component: ApproveDoctorComponent;
  let fixture: ComponentFixture<ApproveDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
