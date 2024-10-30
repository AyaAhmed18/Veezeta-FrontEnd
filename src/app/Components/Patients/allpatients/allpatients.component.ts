
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { PrimeModule } from '../../../prime.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IPatients } from '../../../models/IPatients';
import { PatientService } from '../../../Service/patient.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-allpatients',
  standalone: true,
  imports: [
    CommonModule,
    PrimeModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, ConfirmPopupModule, MessageService, PrimeIcons,],
   templateUrl: './allpatients.component.html',
  styleUrl: './allpatients.component.css'
})
export class AllpatientsComponent   implements OnInit
{
  visible: boolean = false;

  allPatients: IPatients [] = []; 
  dt2!: Table;
  public pageSize = 3;
  public pageNumber = 1;
  public totalRecords=0;
  //@ViewChild('dt2') dt2!: Table;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void
  {
    this.getAllPatients() 
  }
  getAllPatients() 
  {
    this.patientService.getAllPatients(this.pageSize, this.pageNumber).subscribe(re => {
      this.allPatients = re.entities;
      this.totalRecords = re.count;
      console.log("all Patients:", this.allPatients);
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
    this.getAllPatients();  
  }
  onSearch(event: any) 
  {
  
    const query = event.target.value.toLowerCase();
    if (this.dt2) {
      this.dt2.filter(query, 'name', 'contains');
    }
  }
  
  confirm1(event: Event, patient: any) 
  {
    this.confirmationService.confirm({
      target: event.target as HTMLElement, 
      message: `Do you want to delete  "${patient.userName}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-plain',
      accept: () => {
        this.patientService.deletepatient(patient.id).subscribe({
          next: () => {
            this.allPatients = this.allPatients.filter(app => app.id !== patient.id);
            console.log("hiiiiii")
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'patient deleted' });
          },
          error: (error: any) => {
            console.error('Error deleting patient:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting patient.' });
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'Deletion cancelled' });
      }
    });
  }
  confirm2(event: Event, patient: any) 
  {
    this.confirmationService.confirm({
      target: event.target as HTMLElement, 
      message: `Do you want to block  "${patient.userName}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-plain',
      accept: () => {
        this.patientService.blockpatient(patient.id).subscribe({
          next: () => {
            this.allPatients = this.allPatients.filter(app => app.id !== patient.id);
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'patient blocked' });
          },
          error: (error: any) => {
            console.error('Error blocking patient:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error blocking patient.' });
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'blocking cancelled' });
      }
    });
  }

  showDialog() {
    this.visible = true;
}
}
