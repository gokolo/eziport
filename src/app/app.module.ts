import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//add your pages here
import { LoginPage } from '../pages/login/login';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdministrationComponent } from './administration/administration.component';

const appRoutes: Routes = [
  //route your pages here
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'administration', component: AdministrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    LoginComponent,
    RegisterComponent,
    AdministrationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

