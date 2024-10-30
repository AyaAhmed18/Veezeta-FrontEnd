import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightratedReviewComponent } from './hightrated-review.component';

describe('HightratedReviewComponent', () => {
  let component: HightratedReviewComponent;
  let fixture: ComponentFixture<HightratedReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HightratedReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HightratedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
