import { Component, Input } from '@angular/core';
import { MoviesService } from '../../../gifs/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor (private moviesService: MoviesService){  }

  get moviesHistory():string[]{
    return [...this.moviesService.movieHistory]
  }

  searchSidebar(movie:string):void{
    
    this.moviesService.searchMovie(movie);
    console.log({movie});
  }

 
}
