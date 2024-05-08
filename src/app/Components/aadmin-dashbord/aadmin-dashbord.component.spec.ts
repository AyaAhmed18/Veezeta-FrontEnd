import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadminDashbordComponent } from './aadmin-dashbord.component';

describe('AadminDashbordComponent', () => {
  let component: AadminDashbordComponent;
  let fixture: ComponentFixture<AadminDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadminDashbordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadminDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
