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
import{PrimeModule} from '../../../prime.module'
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { appointement } from '../../../models/appointement';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CreatAppointementComponent } from '../creat-appointement/creat-appointement.component';
@Component({
  selector: 'app-appointements',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule, 
            InputTextModule, IconFieldModule,InputIconModule,ToastModule ,ConfirmDialogModule,CreatAppointementComponent],
  providers: [ConfirmationService, MessageService,PrimeIcons,IconFieldModule],
  templateUrl: './appointements.component.html',
  styleUrl: './appointements.component.css'
})
export class AppointementsComponent 
{
  constructor(private router: Router, private confirmationService: ConfirmationService,
              private messageService: MessageService) {}

  allappontiement: any = { entities: [] }; 
  @ViewChild('dt2')
  dt2!: Table;
  
  onSearch(event: any) 
  {
  
    const query = event.target.value.toLowerCase();
    if (this.dt2) {
      this.dt2.filter(query, 'name', 'contains');
    }
  }
    onappointementCreated(newapp: appointement) {
    this.allappontiement.push(newapp);
    this.dt2?.reset();
    this.messageService.add({ severity: 'success', summary: 'appointement Created', detail: 'New appointement added successfully!' });
  }
  // showCreateAppointementDialog() {
  //   this.creatAppointementComponent.showDialog();
  // }
}
