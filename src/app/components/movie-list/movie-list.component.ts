import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe(movies => {
      console.log(JSON.stringify(movies, null, 2));
      this.movies = movies
    });
  }


  async displayFavorites() {
    await this.movieService.getFavorites().then(movies => {
      movies.subscribe(movies => this.movies = movies);
    });
  }

  search(value: string) {
    this.movies = this.movies.filter(
      movie => movie.name?.toLowerCase().includes(value.toLowerCase())
    );
  }

}
