import { Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../../Service/doctor.service';
import { IDoctor } from '../../../models/idoctor';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule, 
    InputTextModule, IconFieldModule,InputIconModule,ToastModule ],
providers: [ConfirmationService, MessageService,PrimeIcons,IconFieldModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent 
{
  @ViewChild('dt2') dt2!: Table;
  public pageNumber: number = 1;
  public items: number =2;
  Doctors: IDoctor[]=[] ; 
  paginatedDoctor: IDoctor[] = [];
  //loading: boolean = false;
  DoctorsNumber:number=0;

  activityValues: number[] = [0, 100];

  constructor( private _DoctorService: DoctorService) {}

  ngOnInit() {
          
    this.loadDoctors();

     
  }

  clear(table: Table) {
      table.clear();
  }
  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;
    this.dt2.filterGlobal(inputElement.value, matchMode); // <-- Apply the filter
  }
  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.dt2.filterGlobal(inputElement.value, 'contains'); // Or any other filter logic you need
  }

  loadDoctors() {
    this._DoctorService.GetPagenatedDoctor(this.items, this.pageNumber).subscribe({
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

  onPageChange(event: any) {
    this.pageNumber = event.page + 1; // PrimeNG pages start from 0
    this.loadDoctors();
  }
  getSeverity(status: string) {
      switch (status) {
          case 'unqualified':
              return 'danger';

          case 'qualified':
              return 'success';

          case 'new':
              return 'info';

          case 'negotiation':
              return 'warning';

          case 'renewal':
              return 'warning';
      }
      return 'info';
    }
}
