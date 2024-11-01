
import { Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { AadminDashbordComponent } from './Components/aadmin-dashbord/aadmin-dashbord.component';
import { AllpatientsComponent } from './Components/Patients/allpatients/allpatients.component';
import { DashbordmainComponent } from './Components/dashbordmain/dashbordmain.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddRoleComponent } from './Components/add-role/add-role.component';
import { AppointementsComponent } from './Components/Appointementss/appointements/appointements.component';
import { DoctorsComponent } from '../app/Components/Doctorss/doctors/doctors.component';
import { ReviewsComponent } from './Components/Reviewss/reviews/reviews.component';
import { AllBookingComponent } from './Components/Bookings/all-booking/all-booking.component';

export const routes: Routes = [
    // {
    //     path: '', 
    //     component: AdminloginComponent,
    //     children: [
    //         { path: '', redirectTo: 'main', pathMatch: 'full' },
    //         { path: 'loginform', component: LoginformComponent },
    //     ],
    // },
    { path: '', redirectTo: 'dashbord/main', pathMatch: 'full' },

    { path: 'dashbord', component: AadminDashbordComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'main', component: DashbordmainComponent },
            { path: 'allpatients', component: AllpatientsComponent },
            { path: 'allapp', component: AppointementsComponent },
            { path: 'allDoc', component: DoctorsComponent },
            { path: 'allrev', component: ReviewsComponent },
            { path: 'allbooks', component: AllBookingComponent },
        ],
    },
    // { path: 'allpatients', component: AllpatientsComponent },
    { path: 'register', component:  RegisterComponent },
    { path: 'addrole', component:  AddRoleComponent },
    { path: '**', component: NotFoundComponent }
];
