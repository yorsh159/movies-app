import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interfaces';
import { Image } from '../../interfaces/images.interfaces';

@Component({
  selector: 'movies-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent {

  constructor(private moviesService : MoviesService) {}

  get movies(): Movie[]{
    return this.moviesService.movieList;
  }

  get images(): Image[]{
    return this.moviesService.imageMovies;
  }
}
