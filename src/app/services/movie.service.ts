import { Injectable } from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Movie} from "../model/movie";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
  }

  getAllMovies(): Observable<Movie[]> {
    return this.firestore.collection<Movie>('movies').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Movie;
        const id = a.payload.doc.id;
        return { id, ...data }; // combine the id with the data
      }))
    );
  }

  getOneMovieById(id: string): Observable<Movie | undefined> {
    return this.firestore.collection<Movie>('movies').doc(id).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as Movie;
        const id = action.payload.id;
        return { id, ...data };
      })
    )
  }

  async addMovieToFavorites(movie: Movie) {
    const user = await this.authService.getCurrentUser();
    console.log(JSON.stringify(user, null, 2));
    if (user) {
      this.firestore.collection('users').doc(user.uid).collection('favorites').doc(movie.id).set(movie);
    }
  }

  async getFavorites(): Promise<Observable<Movie[]>> {
    const user = await this.authService.getCurrentUser();
    if (user) {
      return this.firestore.collection<Movie>('users').doc(user.uid).collection('favorites').snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Movie;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }
    return new Observable<Movie[]>();
  }
}
