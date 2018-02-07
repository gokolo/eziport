import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//add your pages here
import { LoginPage } from '../pages/login/login';

const appRoutes: Routes = [
  //route your pages here
  { path: 'login', component: LoginPage }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage
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

