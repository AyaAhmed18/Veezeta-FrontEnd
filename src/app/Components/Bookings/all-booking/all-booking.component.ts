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
  selector: 'app-all-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, TableModule, TagModule, RatingModule, 
    InputTextModule, IconFieldModule,InputIconModule],
providers: [ConfirmationService, MessageService,PrimeIcons,IconFieldModule],
  templateUrl: './all-booking.component.html',
  styleUrl: './all-booking.component.css'
})
export class AllBookingComponent {
  allbookins: any = { entities: [] }; 
  @ViewChild('dt2')
  dt2!: Table;
  onSearch(event: any) 
  {
  
    const query = event.target.value.toLowerCase();
    if (this.dt2) {
      this.dt2.filter(query, 'name', 'contains');
    }
  }
}
