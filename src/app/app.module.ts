import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { AdminmenuComponent } from './component/adminmenu/adminmenu.component';
import { AdminManageFormComponent } from './component/admin-manage-form/admin-manage-form.component';
import { AdminCreateFormComponent } from './component/admin-create-form/admin-create-form.component';
import { AdminManageCategoryComponent } from './component/admin-manage-category/admin-manage-category.component';
import { AdminAddCategoryComponent } from './component/admin-add-category/admin-add-category.component';
import { AdminManageSubCategoryComponent } from './component/admin-manage-sub-category/admin-manage-sub-category.component';
import { AdminAddSubCategoryComponent } from './component/admin-add-sub-category/admin-add-sub-category.component';
import { AdminManageSkillComponent } from './component/admin-manage-skill/admin-manage-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AdminhomeComponent,
    AdminmenuComponent,
    AdminManageFormComponent,
    AdminCreateFormComponent,
    AdminManageCategoryComponent,
    AdminAddCategoryComponent,
    AdminManageSubCategoryComponent,
    AdminAddSubCategoryComponent,
    AdminManageSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
