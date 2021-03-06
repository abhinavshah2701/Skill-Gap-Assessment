import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './component/login/login.component';
import { AdminhomeComponent }      from './component/adminhome/adminhome.component';
import { AdminManageFormComponent }      from './component/admin-manage-form/admin-manage-form.component';
import { AdminManageCategoryComponent }      from './component/admin-manage-category/admin-manage-category.component';
import { AdminManageSubCategoryComponent } from './component/admin-manage-sub-category/admin-manage-sub-category.component';
import { AdminManageSkillComponent } from './component/admin-manage-skill/admin-manage-skill.component';
import { AdminUpdateSkillComponent } from './component/admin-update-skill/admin-update-skill.component';
import { AdminUpdateFormComponent } from './component/admin-update-form/admin-update-form.component';
import { AdminAddQuestionComponent } from './component/admin-add-question/admin-add-question.component';
import { AdminManageQuestionComponent } from './component/admin-manage-question/admin-manage-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminManageForm', component: AdminManageFormComponent },
  { path: 'adminUpdateForm/:id', component: AdminUpdateFormComponent },
  { path: 'adminManageCategory', component: AdminManageCategoryComponent },
  { path: 'adminManageSubCategory', component: AdminManageSubCategoryComponent },
  { path: 'adminManageSkill', component: AdminManageSkillComponent },
  { path: 'adminUpdateSkill/:id', component: AdminUpdateSkillComponent },
  { path: 'adminAddQuestion/:id', component: AdminAddQuestionComponent },
  { path: 'adminManageQuestion/:id', component: AdminManageQuestionComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}