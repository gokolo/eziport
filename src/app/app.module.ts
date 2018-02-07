import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


// add your pages here
import { LoginPage } from '../pages/login/login';
import { SendSearchFormComponent } from './send-search-form/send-search-form.component';
import { HomeComponent } from './home/home.component';
import { TransferRequestFormComponent } from './transfer-request-form/transfer-request-form.component';
const appRoutes: Routes = [
  // route your pages here
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomeComponent },
  { path: 'send', component: SendSearchFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SendSearchFormComponent,
    HomeComponent,
    TransferRequestFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

