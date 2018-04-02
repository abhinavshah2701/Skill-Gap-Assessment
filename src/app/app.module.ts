import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { AdminmenuComponent } from './component/adminmenu/adminmenu.component';
import { AdminManageFormComponent } from './component/admin-manage-form/admin-manage-form.component';
import { AdminCreateFormComponent } from './component/admin-create-form/admin-create-form.component';
import { AdminManageCategoryComponent } from './component/admin-manage-category/admin-manage-category.component';
import { AdminManageSubCategoryComponent } from './component/admin-manage-sub-category/admin-manage-sub-category.component';
import { AdminManageSkillComponent } from './component/admin-manage-skill/admin-manage-skill.component';
import { AdminUpdateCategoryComponent } from './component/admin-update-category/admin-update-category.component';
import { AdminUpdateSubCategoryComponent } from './component/admin-update-sub-category/admin-update-sub-category.component';

import { HttpService } from './service/http.service';



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
    AdminManageSubCategoryComponent,
    AdminManageSkillComponent,
    AdminUpdateCategoryComponent,
    AdminUpdateSubCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
