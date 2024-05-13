import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [RouterModule ,FormsModule, CommonModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent 
{

  constructor(private router: Router,private route: ActivatedRoute,private authService: AuthService ) {}

  userName: string | undefined; 
  password: string | undefined;
  errorMessage: string | undefined;
  roleName: string | undefined;


  onSubmit(): void {
    if (this.userName && this.password) {
      this.authService.login({userName: this.userName, password: this.password }).subscribe({
        next: (data) => {
          console.log('Login successful', data);
          localStorage.setItem('token', data.token); 
          this.roleName = data.role;
          console.log('userRole', this.roleName);
          this.router.navigate(['/dashbord']);
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid login attempt. Please try again.';
        }
      });
    }
  }
 
}

