import { Component, OnInit } from '@angular/core';
import{IPatients} from '../../models/IPatients'
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../Service/patient.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-allpatients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allpatients.component.html',
  styleUrl: './allpatients.component.css'
})
export class AllpatientsComponent implements OnInit{
  public pageNumber: number = 1;
  public pageSize: number =12;
  totalPatients: number =100; 
  allpatients: any = { entities: [] }; 
  paginatedPatients: IPatients[] = [];
  constructor(private router: Router,private route: ActivatedRoute,
   private _patientService: PatientService
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
