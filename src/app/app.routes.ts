import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
];
