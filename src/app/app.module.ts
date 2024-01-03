import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {provideRouter, RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import {routes} from "./app.routes";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MovieListComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
