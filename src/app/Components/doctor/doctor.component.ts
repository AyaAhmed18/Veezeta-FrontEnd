import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../models/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../Service/doctor.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent  implements OnInit{
  selectdocbyid : number=0;
  AllDoctor: any[]=[];
 pageSize:number = 10;
Alldoc:number=0;

  ngOnInit(): void {
    this.getAllDoctors();
  }
  constructor( private _activeRouter: ActivatedRoute, private _route: Router,private _doctorservice:DoctorService){


  }

  getAllDoctors()  {
    this._doctorservice.getAllDoctors()
    .subscribe({ next: (data) => {
      this.AllDoctor = data;
      console.log("allCategories")
      console.log(data)
    }
    });
  }
  deleteCategory(categoryId: number): void {
    this._doctorservice.Deletedocbyid(categoryId).subscribe(
      {next:(data)=>{
        this._route.navigateByUrl(`/Doctor`);},
        error: (err) => {
          console.error('Failed to delete Doctor:', err);
      } });
  
    }

  GetdoctorByCatId(docId: number):void
  {
    this._route.navigateByUrl(`/GetOne/${docId}`);
  }
}
