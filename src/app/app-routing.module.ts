import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './component/login/login.component';
import { AdminhomeComponent }      from './component/adminhome/adminhome.component';
import { AdminManageFormComponent }      from './component/admin-manage-form/admin-manage-form.component';
import { AdminCreateFormComponent }      from './component/admin-create-form/admin-create-form.component';
import { AdminManageCategoryComponent }      from './component/admin-manage-category/admin-manage-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminManageForm', component: AdminManageFormComponent },
  { path: 'adminCreateForm', component: AdminCreateFormComponent },
  { path: 'adminManageCategory', component: AdminManageCategoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}