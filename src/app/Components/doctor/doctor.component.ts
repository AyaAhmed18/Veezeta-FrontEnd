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
pageNumber: number = 1;
totalPages: number = 0;
pageNumbers: number[]=[];
  ngOnInit(): void {
    this.getAllDoctors();
  }
  constructor( private _activeRouter: ActivatedRoute, private _route: Router,private _doctorservice:DoctorService){


  }

  
  getAllDoctors()  {
    this._doctorservice.getAllDoctors(this.pageSize,this.pageNumber)
    .subscribe({ next: (data) => {
      this.AllDoctor = data;
     // this.Alldoc = data.count;
      this.totalPages=Math.ceil( this.Alldoc / this.pageSize)
      this.pageNumbers = Array.from({ length: this.totalPages }, (_, index) => index + 1);
      console.log("AllDoctor")
      console.log(this.AllDoctor)
    }
    });
  }  

  deletedoctor(docid: number): void {
      this._doctorservice.Deletedocbyid(docid);
      this._route.navigateByUrl(`/Doctor/${docid}`);
    }

  GetdoctorByCatId(docId: number):void
  {
    this._route.navigateByUrl(`/GetOne/${docId}`);
  }
}
