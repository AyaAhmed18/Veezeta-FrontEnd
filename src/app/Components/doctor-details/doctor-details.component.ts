import { Component } from '@angular/core';
import { IDoctor } from '../../models/idoctor';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent {
doctor!:IDoctor
}
