import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { AdminquestionComponent } from './component/adminquestion/adminquestion.component';
import { AdminmenuComponent } from './component/adminmenu/adminmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AdminhomeComponent,
    AdminquestionComponent,
    AdminmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
