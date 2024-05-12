import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../models/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../Service/doctor.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent  implements OnInit{
  @Input() Alldoctoes:Doctor[]=[];
  @Input() doctors: any[]=[];
  AllDoctor: any[]=[];
 docList: Doctor[]|null = null;
 pageSize:number = 10;
AllProd:number=0;
totalPages: number = 0;
pageNumber: number = 1;
pageNumbers: number[]=[];
  ngOnInit(): void {
      console.log(this.doctors);
  }
  constructor( private _activeRouter: ActivatedRoute, private _route: Router,private _doctorservice:DoctorService){


  }

  getAllDoctors() {
    this._doctorservice.getAllDoctors(this.pageSize, this.pageNumber).subscribe({
        next: (data) => {
            this.doctors = data;
            this.AllDoctor = data.count;
  
            this.totalPages=Math.ceil( this.AllProd / this.pageSize)
            this.pageNumbers = Array.from({ length: this.totalPages }, (_, index) => index + 1);
            console.log("all");
            console.log( this.doctors);
           // this.sanitizeImages();
        },
        error: (err) => {
            console.log(err);
        }
    });
  }
  deletedoc(id:number){
    this._doctorservice.Deletedocbyid(id).subscribe(   {
      next:(data: any)=>{
        this.docList=data.entities
        console.log(data);
        console.log("docList")
        console.log(this.docList);
      }
    })
  }
}
