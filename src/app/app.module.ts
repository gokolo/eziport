import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackageComponent } from './Package/Package.component';
import { SendSearchFormComponent } from './send-search-form/send-search-form.component';
import { HomeComponent } from './home/home.component';
import { TransferRequestFormComponent } from './transfer-request-form/transfer-request-form.component';
import { MypackagesComponent } from './mypackages/mypackages.component';
import { AuthService } from './auth.service';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'send', component: SendSearchFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mypackages', component: MypackagesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'package', component: PackageComponent }

];

@NgModule({
  declarations: [
    AppComponent,

    SendSearchFormComponent,
    HomeComponent,
    TransferRequestFormComponent,
    LoginComponent,
    MypackagesComponent,
    RegisterComponent,
    PackageComponent

  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
