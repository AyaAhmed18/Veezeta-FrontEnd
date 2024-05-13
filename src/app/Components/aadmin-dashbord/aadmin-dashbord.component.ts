
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import { AllpatientsComponent } from '../allpatients/allpatients.component';
// import { DashbordmainComponent } from '../dashbordmain/dashbordmain.component';
// import { HttpClientModule } from '@angular/common/http';
// import { AuthService } from '../../Service/auth.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// @Component({
//   selector: 'app-aadmin-dashbord',
//   standalone: true,
//   imports: [CommonModule,FormsModule,RouterLink,AllpatientsComponent,DashbordmainComponent,RouterOutlet,HttpClientModule],
//   templateUrl: './aadmin-dashbord.component.html',
//   styleUrls: ['./aadmin-dashbord.component.css']
// })
// export class AadminDashbordComponent 
// {
//   hasUserRole: Observable<boolean>;

// constructor(private authService: AuthService) {
//   this.hasUserRole = this.checkUserRole();
// }

// checkUserRole(): Observable<boolean> {
//   return this.authService.getUserRole().pipe(
//     map(role => {
//       console.log("rolccccccccc", role);
//       return role === 'Owner'; 
//     })
//   );
// }

//  }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllpatientsComponent } from '../allpatients/allpatients.component';
import { DashbordmainComponent } from '../dashbordmain/dashbordmain.component';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'app-aadmin-dashbord',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,AllpatientsComponent,DashbordmainComponent,RouterOutlet,HttpClientModule],
  
  templateUrl: './aadmin-dashbord.component.html',
  styleUrls: ['./aadmin-dashbord.component.css']
})
export class AadminDashbordComponent implements OnInit {
  hasUserRole: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.hasUserRole = this.checkUserRole();
  }

  
  checkUserRole(): Observable<boolean> {
    return this.authService.getUserRole().pipe(
      map(roles => {
        console.log("User roles:", roles);
        return roles.includes('Owner'); 
      })
    );
  }
  
}
