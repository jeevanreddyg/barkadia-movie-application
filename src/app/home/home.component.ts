import { Component, OnInit } from '@angular/core';

import { Movie } from '../shared/services/movie/movie'
import { MovieService } from '../shared/services/movie/movie.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {

   movies: Movie;

   constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

   loadMovies() {
     
          this.movieService.getMovie().subscribe(
                                 movies => this.movies = movies.json(), //Bind to view
                                 err => { // Log errors if any 
                                           console.log(err);
                                        });
                                 
      }

}
