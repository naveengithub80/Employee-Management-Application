import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
