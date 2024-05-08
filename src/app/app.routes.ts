import { Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { AadminDashbordComponent } from './Components/aadmin-dashbord/aadmin-dashbord.component';
export const routes: Routes = [
    {
        path: '', 
        component: AdminloginComponent,
        children: [
            {path: '', redirectTo: 'main', pathMatch: 'full'},
            {path: 'loginform', component: LoginformComponent,},
           
        ],
    },
    
    {path: 'dashbord', component: AadminDashbordComponent,},
    {path: '**', component: NotFoundComponent}
];
