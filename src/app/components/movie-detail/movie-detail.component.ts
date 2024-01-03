import {Component} from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {


  movie: Movie | undefined = {}

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.movieService.getOneMovieById(id).subscribe(movie => this.movie = movie);
  }

  addToFavorites() {
    if (this.movie) {
      console.log(JSON.stringify(this.movie, null, 2));
      this.movieService.addMovieToFavorites(this.movie).then(
        () => {
          this.router.navigate(['/']);
        },
      );
    }
  }

}
