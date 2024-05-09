import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordmainComponent } from './dashbordmain.component';

describe('DashbordmainComponent', () => {
  let component: DashbordmainComponent;
  let fixture: ComponentFixture<DashbordmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
