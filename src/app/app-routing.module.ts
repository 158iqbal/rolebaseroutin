import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudituserComponent } from './audituser/audituser.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NormaluserComponent } from './normaluser/normaluser.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'normaluser',component:NormaluserComponent, canActivate:[AuthGuard], data: {role: "NORMALUSER"}},
  {path:'audituser',component:AudituserComponent, canActivate : [AuthGuard], data: {role: "AUDITUSER"}},
  {path:'dashboard',component:DashboardComponent, canActivate : [AuthGuard], data: {role: "AUDITUSER"}}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
