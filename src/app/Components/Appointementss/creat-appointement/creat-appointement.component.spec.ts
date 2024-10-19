import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAppointementComponent } from './creat-appointement.component';

describe('CreatAppointementComponent', () => {
  let component: CreatAppointementComponent;
  let fixture: ComponentFixture<CreatAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatAppointementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
