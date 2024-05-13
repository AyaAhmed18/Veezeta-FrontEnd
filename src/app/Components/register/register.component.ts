import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent 
{
  username = '';
  password = '';
  email = '';
  confirmPassword = '';
  roleName = 'Admin';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    const admin = {
      userName: this.username,
      password: this.password,
      email: this.email,
      confirmPassword: this.confirmPassword,
      roleName: this.roleName,
    };

    this.authService.register(admin).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/loginform']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        if (error.status && error.status < 300) {
          this.router.navigate(['/loginform']);
        } else {
          this.handleRegistrationError(error);
        }
      }
    });
  }

  handleRegistrationError(error: any): void {
    this.errorMessage = "An unexpected error occurred. Please try again later.";
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status === 400) {
        this.errorMessage = error.error.message || "Registration failed: Invalid input.";
      } else {
        this.errorMessage = error.statusText || this.errorMessage;
      }
    }
  }
  navigateToLoginForm(): void {
    this.router.navigate(['/loginform']);
  }
}
