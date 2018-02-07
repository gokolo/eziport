import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';

//add your pages here
import { LoginPage } from '../pages/login/login';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackageComponent } from './Package/Package.component';
import { PackageService } from './Package.service';

const appRoutes: Routes = [
  //route your pages here
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Package', component: PackageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    LoginComponent,
    RegisterComponent,
    PackageComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

