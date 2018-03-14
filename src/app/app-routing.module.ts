import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './component/login/login.component';
import { AdminhomeComponent }      from './component/adminhome/adminhome.component';
import { AdminManageFormComponent }      from './component/admin-manage-form/admin-manage-form.component';
import { AdminquestionComponent }      from './component/adminquestion/adminquestion.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminManageForm', component: AdminManageFormComponent },
  { path: 'adminquestion', component: AdminquestionComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}