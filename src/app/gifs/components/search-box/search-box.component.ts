import { Component,ElementRef,ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private moviesService: MoviesService){

  }

  searchMovie():void{
    const newTag = this.tagInput.nativeElement.value;
    //const id = 0;

    this.moviesService.searchMovie(newTag);
    //this.moviesService.searchImageMovie(id);

    this.tagInput.nativeElement.value ='';

  }
}
