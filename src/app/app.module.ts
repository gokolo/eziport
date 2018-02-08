import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SendSearchFormComponent } from './send-search-form/send-search-form.component';
import { HomeComponent } from './home/home.component';
import { TransferRequestFormComponent } from './transfer-request-form/transfer-request-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MypackagesComponent } from './mypackages/mypackages.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'send', component: SendSearchFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mypackages', component: MypackagesComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SendSearchFormComponent,
    HomeComponent,
    TransferRequestFormComponent,
    LoginComponent,
    MypackagesComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

