import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoginformComponent } from '../loginform/loginform.component';
@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [HeaderComponent,LoginformComponent],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

}
