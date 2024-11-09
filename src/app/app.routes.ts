
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
import { HightratedReviewComponent } from './Components/Reviewss/hightrated-review/hightrated-review.component';
import { ApproveDoctorComponent } from './Components/approve-doctor/approve-doctor.component';
import { DoctorDetailsComponent } from './Components/doctor-details/doctor-details.component';
import { ProfileComponent } from './Components/Website/profile/profile.component';
import { MyAppointmentComponent } from './Components/Website/my-appointment/my-appointment.component';

export const routes: Routes = [
   { path: '', redirectTo: 'loginform', pathMatch: 'full' },
   { path: 'loginform', component: LoginformComponent },
    { path: 'dashbord', component: AadminDashbordComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'main', component: DashbordmainComponent },
            { path: 'allpatients', component: AllpatientsComponent },
            { path: 'allapp', component: AppointementsComponent },
            { path: 'allDoc', component: DoctorsComponent },
            { path: 'ApproveDoc', component: ApproveDoctorComponent },
            { path: 'DocDetails/:id', component: DoctorDetailsComponent },
            { path: 'allrev', component: ReviewsComponent },
            { path: 'hightrev', component: HightratedReviewComponent },
            { path: 'allbooks', component: AllBookingComponent },
        ],
    },
    { path: 'website', component: MyAppointmentComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'profile', component: ProfileComponent },
            { path: 'appointment', component: MyAppointmentComponent },
           
           
        ],
    },
    // { path: 'allpatients', component: AllpatientsComponent },
    { path: 'register', component:  RegisterComponent },
    { path: 'addrole', component:  AddRoleComponent },
    { path: '**', component: NotFoundComponent }
];
