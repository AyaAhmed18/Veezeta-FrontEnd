import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointementComponent } from './edit-appointement.component';

describe('EditAppointementComponent', () => {
  let component: EditAppointementComponent;
  let fixture: ComponentFixture<EditAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAppointementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
