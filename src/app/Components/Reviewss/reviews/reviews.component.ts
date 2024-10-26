import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { PrimeModule } from '../../../prime.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { review } from '../../../models/review';
import { ReviewService } from '../../../Service/review.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CommonModule,
    PrimeModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, ConfirmPopupModule, MessageService, PrimeIcons,],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent   implements OnInit
{
  visible: boolean = false;

  allreviews: review [] = []; 
  dt2!: Table;
  public pageSize = 3;
  public pageNumber = 1;
  public totalRecords=0;
  //@ViewChild('dt2') dt2!: Table;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void
  {
    this.GetAllReviews() 
  }
  GetAllReviews() 
  {
    this.reviewService.GetAllReviews(this.pageSize, this.pageNumber).subscribe(re => {
      this.allreviews = re.entities;
      this.totalRecords = re.count;
      console.log("all reviews:", this.allreviews);
      console.log("totalRecords:",  this.totalRecords);
    });
  }

  onPageChange(event: any) 
  {
    console.log("paginator event:", event); 
    this.pageNumber = event.page + 1;  
    this.pageSize = event.rows;  
    console.log(" pageNumber:", this.pageNumber); 
    console.log(" pageSize:", this.pageSize); 
    this.GetAllReviews();  
  }
  onSearch(event: any) 
  {
  
    const query = event.target.value.toLowerCase();
    if (this.dt2) {
      this.dt2.filter(query, 'name', 'contains');
    }
  }
  confirm2(event: Event, review: any) 
  {
    this.confirmationService.confirm({
      target: event.target as HTMLElement, 
      message: `Do you want to delete the review for doctor "${review.doctorName}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-plain',
      accept: () => {
        this.reviewService.deletereview(review.id).subscribe({
          next: () => {
            this.allreviews = this.allreviews.filter(app => app.id !== review.id);
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'review deleted' });
          },
          error: (error: any) => {
           
             console.error('Error deleting appointment:', error);
             this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting review.' });
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'Deletion cancelled' });
      }
    });
  }

  showDialog() {
    this.visible = true;
}
}
