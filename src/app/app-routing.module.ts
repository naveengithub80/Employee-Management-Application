// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Import LoginComponent
import { RegisterComponent } from './register/register.component';  // Import RegisterComponent
import { AboutComponent } from './about/about.component';  // Import AboutComponent
import { HomeComponent } from './home/home.component';  // Import HomeComponent

const routes: Routes = [
  { path: '', component: HomeComponent },  // Set HomeComponent as the default route (home page)
  { path: 'login', component: LoginComponent },  // Route to LoginComponent
  { path: 'register', component: RegisterComponent },  // Route to RegisterComponent
  { path: 'about', component: AboutComponent },  // Route to AboutComponent (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
