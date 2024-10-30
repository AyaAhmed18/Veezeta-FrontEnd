import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IDoctor } from '../../models/idoctor';
import { DoctorService } from '../../Service/doctor.service';

@Component({
  selector: 'app-approve-doctor',
  standalone: true,
  imports: [],
  templateUrl: './approve-doctor.component.html',
  styleUrl: './approve-doctor.component.css'
})
export class ApproveDoctorComponent {
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
}
