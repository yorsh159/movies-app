import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interfaces';
import { Image } from '../../interfaces/images.interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {

  constructor(private moviesService : MoviesService) {}

  //@Input()
  //public movies:Movie[] = [];

  get movies(): Movie[]{
    return this.moviesService.movieList;
  }

  @Input()
  public images:Image[] = [];
}
