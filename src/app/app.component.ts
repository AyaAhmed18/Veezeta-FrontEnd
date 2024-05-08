import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AadminDashbordComponent } from './Components/aadmin-dashbord/aadmin-dashbord.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AadminDashbordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  sidebarToggle = document.body.querySelector('#sidebarToggle');
  ngOnInit(): void {
    // Toggle the side navigation
    if (this.sidebarToggle) {
      this.sidebarToggle.addEventListener('click', (event: Event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled').toString());
      });
    }
  }
  title = 'Veezeta';
}

