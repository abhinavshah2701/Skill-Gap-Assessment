import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './component/login/login.component';
import { AdminhomeComponent }      from './component/adminhome/adminhome.component';
import { AdminManageFormComponent }      from './component/admin-manage-form/admin-manage-form.component';
import { AdminCreateFormComponent }      from './component/admin-create-form/admin-create-form.component';
import { AdminManageCategoryComponent }      from './component/admin-manage-category/admin-manage-category.component';
import { AdminManageSubCategoryComponent } from './component/admin-manage-sub-category/admin-manage-sub-category.component';
import { AdminManageSkillComponent } from './component/admin-manage-skill/admin-manage-skill.component';
import { AdminUpdateCategoryComponent } from './component/admin-update-category/admin-update-category.component';
import { AdminUpdateSubCategoryComponent } from './component/admin-update-sub-category/admin-update-sub-category.component';
import { AdminUpdateSkillComponent } from './component/admin-update-skill/admin-update-skill.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminManageForm', component: AdminManageFormComponent },
  { path: 'adminCreateForm', component: AdminCreateFormComponent },
  { path: 'adminManageCategory', component: AdminManageCategoryComponent },
  { path: 'adminUpdateCategory/:id', component: AdminUpdateCategoryComponent },
  { path: 'adminManageSubCategory', component: AdminManageSubCategoryComponent },
  { path: 'adminUpdateSubCategory/:id', component: AdminUpdateSubCategoryComponent },
  { path: 'adminManageSkill', component: AdminManageSkillComponent },
  { path: 'adminUpdateSkill/:id', component: AdminUpdateSkillComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}