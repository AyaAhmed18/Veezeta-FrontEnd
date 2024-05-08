// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-aadmin-dashbord',
//   standalone: true,
//   imports: [],
//   templateUrl: './aadmin-dashbord.component.html',
//   styleUrl: './aadmin-dashbord.component.css'
// })
// export class AadminDashbordComponent {

// }
// aadmin-dashbord.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aadmin-dashbord',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './aadmin-dashbord.component.html',
  styleUrls: ['./aadmin-dashbord.component.css']
})
export class AadminDashbordComponent {}
