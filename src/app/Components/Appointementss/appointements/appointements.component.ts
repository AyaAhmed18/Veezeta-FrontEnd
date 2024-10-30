import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { PrimeModule } from '../../../prime.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { appointement } from '../../../models/appointement';
import { CreatAppointementComponent } from '../creat-appointement/creat-appointement.component';
import { AppointementService } from '../../../Service/appointement.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-appointements',
  standalone: true,
  imports: [
    CommonModule,
    PrimeModule,
    ConfirmDialogModule,
    CreatAppointementComponent,
  ],
  providers: [ConfirmationService, ConfirmPopupModule, MessageService, PrimeIcons,],
  templateUrl: './appointements.component.html',
  styleUrls: ['./appointements.component.css']
})
export class AppointementsComponent implements OnInit {
  allappontiement: appointement[] = [];
  public pageSize = 3;
  public pageNumber = 1;
  public totalRecords=0;
  @ViewChild('dt2') dt2!: Table;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private appointementService: AppointementService
  ) {}

  ngOnInit(): void
  {
   this.getallppointements();
  }

  getallppointements() 
  {
    this.appointementService.getAllAppointments(this.pageSize, this.pageNumber).subscribe(app => {
      this.allappontiement = app.entities;
      this.totalRecords = app.count;
      console.log("all appointments:", this.allappontiement);
      console.log("totalRecords:",  this.totalRecords);
    });
  }

  confirm2(event: Event, appointement: any) 
  {
    this.confirmationService.confirm({
      target: event.target as HTMLElement, 
      message: `Do you want to delete the appointment for doctor "${appointement.doctorName}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-plain',
      accept: () => {
        this.appointementService.deleteAppointment(appointement.id).subscribe({
          next: () => {
            this.allappontiement = this.allappontiement.filter(app => app.id !== appointement.id);
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Appointment deleted' });
          },
          error: (error: any) => {
            console.error('Error deleting appointment:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting appointment.' });
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'Deletion cancelled' });
      }
    });
  }

  onSearch(event: any)
  {
      const query = event.target.value.toLowerCase();
      if (this.dt2) 
        {
          this.dt2.filter(query, 'doctorName', 'contains');
        }
   }
  
  onappointementCreated(newapp: appointement) 
  {
    this.allappontiement.push(newapp); 
    this.dt2?.reset(); 
    this.messageService.add({ severity: 'success', summary: 'Appointment Created', detail: 'New appointment added successfully!' });
  }
  
  onPageChange(event: any) 
  {
    console.log("paginator event:", event); 
    this.pageNumber = event.page + 1;  
    this.pageSize = event.rows;  
    console.log(" pageNumber:", this.pageNumber); 
    console.log(" pageSize:", this.pageSize); 
    this.getallppointements();  
  }
  
}
