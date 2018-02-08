import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackageComponent } from './Package/Package.component';
import { SendSearchFormComponent } from './send-search-form/send-search-form.component';
import { HomeComponent } from './home/home.component';
import { TransferRequestFormComponent } from './transfer-request-form/transfer-request-form.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'send', component: SendSearchFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Package', component: PackageComponent }

];

@NgModule({
  declarations: [
    AppComponent,

    SendSearchFormComponent,
    HomeComponent,
    TransferRequestFormComponent,
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
    BrowserModule,
    FormsModule
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
