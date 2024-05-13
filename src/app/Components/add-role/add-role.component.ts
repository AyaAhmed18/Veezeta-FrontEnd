import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [RouterModule ,FormsModule, CommonModule],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent {
  newrole:string| any;
  errorMessage: string = '';
  constructor(private router: Router,private route: ActivatedRoute,private authService: AuthService ){}

  
  addrole() {
    if (this.newrole) {
      this.authService.AddNewRole(this.newrole).subscribe(
        (result: string) => {
          console.log(result); 
          this.router.navigateByUrl('/dashbord');
        },
        (error: any) => {
          this.errorMessage = 'Error: ' + error; 
          console.error(error); 
        }
      );
    } else {
      this.errorMessage = 'Role name is empty'; 
      console.error('Role name is empty'); 
    }
  }
}
