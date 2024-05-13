
import { Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { AadminDashbordComponent } from './Components/aadmin-dashbord/aadmin-dashbord.component';
import { AllpatientsComponent } from './Components/allpatients/allpatients.component';
import { DashbordmainComponent } from './Components/dashbordmain/dashbordmain.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddRoleComponent } from './Components/add-role/add-role.component';

export const routes: Routes = [
    {
        path: '', 
        component: AdminloginComponent,
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'loginform', component: LoginformComponent },
        ],
    },
    { path: 'dashbord', component: AadminDashbordComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'main', component: DashbordmainComponent },
            { path: 'allpatients', component: AllpatientsComponent },
            { path: 'Doctor', component: DoctorComponent },
        ],
    },
   
    { path: 'register', component:  RegisterComponent },
    { path: 'addrole', component:  AddRoleComponent },
    { path: '**', component: NotFoundComponent }
];
