import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//add your pages here
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home.component';
const appRoutes: Routes = [
  //route your pages here
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomePage
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

