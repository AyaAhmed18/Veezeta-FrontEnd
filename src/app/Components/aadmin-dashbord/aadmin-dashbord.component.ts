
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllpatientsComponent } from '../Patients/allpatients/allpatients.component';
import { DashbordmainComponent } from '../dashbordmain/dashbordmain.component';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-aadmin-dashbord',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink, MenubarModule, MenubarModule,
    AllpatientsComponent,DashbordmainComponent,RouterOutlet,HttpClientModule],
  
  templateUrl: './aadmin-dashbord.component.html',
  styleUrls: ['./aadmin-dashbord.component.css']
})
export class AadminDashbordComponent implements OnInit {

  Activeclass = 'active';
  isCollapsed = true;
  isSidebarVisible = true;
  isOrdersExpanded = false; 
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.isCollapsed = !this.isCollapsed;
  }
  toggleOrders() {
    this.isOrdersExpanded = !this.isOrdersExpanded; 
  }
  
  constructor() {}
  ngOnInit() {


    

  // hasUserRole: Observable<boolean> | undefined;

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  //   this.hasUserRole = this.checkUserRole();
  // }

  
  // checkUserRole(): Observable<boolean> {
  //   return this.authService.getUserRole().pipe(
  //     map(roles => {
  //       console.log("User roles:", roles);
  //       return roles.includes('Owner'); 
  //     })
  //   );
  // }
  
}
}
