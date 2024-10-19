import { Component, OnInit ,ViewChild} from '@angular/core';
import{IPatients} from '../../../models/IPatients'
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../../Service/patient.service';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
@Component({
  selector: 'app-allpatients',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule, 
             InputTextModule, IconFieldModule,InputIconModule],
  providers: [ConfirmationService, MessageService,PrimeIcons,IconFieldModule],
  templateUrl: './allpatients.component.html',
  styleUrl: './allpatients.component.css'
})
export class AllpatientsComponent implements OnInit{
  public pageNumber: number = 1;
  public pageSize: number =12;
  totalPatients: number =100; 
  allpatients: any = { entities: [] }; 
  paginatedPatients: IPatients[] = [];
  date: Date | undefined;
  color: string | undefined;
  @ViewChild('dt2')
  dt2!: Table;
  constructor(private router: Router,private route: ActivatedRoute,
   private _patientService: PatientService,private confirmationService: ConfirmationService, private messageService: MessageService
   ) {}




  ngOnInit(): void 
  {
    this._patientService.getAllPatients(this.pageSize,this.pageNumber).subscribe({
      next: (res) => {
        this.allpatients = res;
        //this.updatePaginatedProducts();
        console.log("hi",res)
      },
      error: (error) => {
        console.error('Error fetching PATIENTS:', error);
      }
    });
  }
  onSearch(event: any) 
  {
  
    const query = event.target.value.toLowerCase();
    if (this.dt2) {
      this.dt2.filter(query, 'name', 'contains');
    }
  }
  confirm2(event: Event, category: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Do you want to delete the category "${category.name}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
  
      // accept: () => {
      //   this._patientService.deleteCategory(category.id).subscribe({
      //     next: (response: IPatients) => {
            
      //       this.allpatients = this.allpatients.filter(cat => cat.id !== category.id);
      //       this.messageService.add({
      //         severity: 'info',
      //         summary: 'Confirmed',
      //         detail: 'Category deleted'
      //       });
      //     },
      //     error: (error: any) => {
      //       console.error('Error deleting category:', error);
      //       this.messageService.add({
      //         severity: 'error',
      //         summary: 'Error',
      //         detail: 'Error deleting category.'
      //       });
      //     }
      //   });
      // },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Deletion cancelled' });
      }
    });
  }
  




  // updatePaginatedProducts(): void {
  //   const startIndex = (this.pageNumber - 1) * this.pageSize;
  //   this.paginatedPatients = this.allpatients.slice(startIndex, startIndex + this.pageSize);
    
  // }
  

  // totalPages(): number {
  //   return Math.ceil(this.totalPatients / this.pageSize);
  // }
  // changePage(page: number): void {
  //   this.pageNumber = page;
  //   window.scrollTo(0, 0);
  // }
  // goToNextPage() {
  //   if (this.pageNumber < this.totalPages()) {
  //     this.changePage(this.pageNumber + 1);
  // window.scrollTo(0, 0);
  //   }
  // }
  
  // goToPreviousPage() {
  //   if (this.pageNumber > 1) {
  //     this.changePage(this.pageNumber - 1);
  //     window.scrollTo(0, 0);
  
  //   }
  // }
  // get visiblePageNumbers(): number[] {
  //   let startPage: number, endPage: number;
  //   const visiblePages = 2; // Change visiblePages to 2 initially
  //   const totalPages = this.totalPages();
  
  //   if (totalPages <= visiblePages) {
  //     // Less than `visiblePages` total pages so show all
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else {
  //     // More than `visiblePages` total pages so calculate start and end pages
  //     if (this.pageNumber <= 1) { // Adjust condition for initial case
  //       startPage = 1;
  //       endPage = visiblePages;
  //     } else if (this.pageNumber >= totalPages) {
  //       startPage = totalPages - 1;
  //       endPage = totalPages;
  //     } else {
  //       startPage = this.pageNumber - 1;
  //       endPage = this.pageNumber + 1;
  //     }
  //   }
  
  //   // create an array of pages to ng-repeat in the pager control
  //   let pages: number[] = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
  
  //   return pages;
  // }
  

}
