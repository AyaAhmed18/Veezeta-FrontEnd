import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IDoctor } from '../../models/idoctor';
import { DoctorService } from '../../Service/doctor.service';
import { IconFieldModule } from 'primeng/iconfield';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-approve-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule, 
    InputTextModule, IconFieldModule,InputIconModule,ToastModule ,RouterLink,ReactiveFormsModule,DialogModule,PaginatorModule],
  templateUrl: './approve-doctor.component.html',
  styleUrl: './approve-doctor.component.css'
})
export class ApproveDoctorComponent {
  @ViewChild('dt2') dt2!: Table;
  public pageNumber: number = 1;
  @Output() appointementCreated = new EventEmitter<IDoctor>();
  public items: number =5;
  Doctors: IDoctor[]=[] ; 
  paginatedDoctor: IDoctor[] = [];
  visible: boolean = false;
  DoctorsNumber:number=0;
  public totalRecords=0;
  activityValues: number[] = [0, 100];
  approve!:string

  constructor( private _DoctorService: DoctorService) {}

  ngOnInit() {
          
    this.loadDoctors();

     
  }
 

  loadDoctors() {
    this._DoctorService.AllDisApprovedDoctorPages(this.items, this.pageNumber).subscribe({
      next: (res) => {
        this.paginatedDoctor = res.entities;
        this.DoctorsNumber = res.count;
        console.log("Fetched paginated doctors", this.paginatedDoctor);
      },
      error: (error) => {
        console.error('Error fetching Doctors:', error);
      }
    });
  }

 

  
  onPageChange(event: any) 
  {
    console.log("paginator event:", event); 
    this.pageNumber = event.page + 1;  
    this.items = event.rows;  
    console.log(" pageNumber:", this.pageNumber); 
    console.log(" pageSize:", this.items); 
    this.loadDoctors();  
  }
  

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;
    this.dt2.filterGlobal(inputElement.value, matchMode); // <-- Apply the filter
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  Approve(id:string){
    this._DoctorService.ApproveDoctor(id).subscribe({
      next: (res) => {
       this.approve=res.Message;
        console.log("done", res,res.Message);
      },
      error: (error) => {
        console.error('Error fetching Doctors:', error.Message);
      }
    });
  }

}
