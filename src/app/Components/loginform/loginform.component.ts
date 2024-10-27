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

  email: string | undefined; 
  password: string | undefined;
  errorMessage: string | null = null; 
  takedata:string | null = null; 
  userName:string |undefined

  onSubmit(): void {
    this.errorMessage = null;
    if (this.email && this.password) {
      this.authService.login({email: this.email, password: this.password }).subscribe({
        next: (data) => {
          console.log('Login successful', data);
          localStorage.setItem('token', data.token);
          this.router.navigate(['/dashbord']);
          if (data.status === 200) {
            console.log(data.body);
          }
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid login attempt. Please try again.';
         // this.errorMessage = error.error;
        }
      });
    }
  }
 
}

