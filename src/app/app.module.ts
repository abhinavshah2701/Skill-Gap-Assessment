import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { AdminmenuComponent } from './component/adminmenu/adminmenu.component';
import { AdminManageFormComponent } from './component/admin-manage-form/admin-manage-form.component';
import { AdminCreateFormComponent } from './component/admin-create-form/admin-create-form.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
