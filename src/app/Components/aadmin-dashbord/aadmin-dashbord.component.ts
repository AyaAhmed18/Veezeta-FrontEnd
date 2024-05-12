
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AllpatientsComponent } from '../allpatients/allpatients.component';
import { DashbordmainComponent } from '../dashbordmain/dashbordmain.component';

@Component({
  selector: 'app-aadmin-dashbord',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,AllpatientsComponent,DashbordmainComponent,RouterOutlet],
  templateUrl: './aadmin-dashbord.component.html',
  styleUrls: ['./aadmin-dashbord.component.css']
})
export class AadminDashbordComponent {}
