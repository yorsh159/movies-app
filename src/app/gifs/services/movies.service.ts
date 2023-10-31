import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Movie, SearchResponse } from '../interfaces/movies.interfaces';
import { Image, SearchImages } from '../interfaces/images.interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movieList: Movie[] = []
  public imageMovies: Image[] = []

  private _movieHistory: string[] = [];
  private apiKey:string = '46d01c1eb5a15e212bdc29df77e5f651'
  private apiUrl:string = 'https://api.themoviedb.org/3/search'
  private apiUrlImage:string = 'https://api.themoviedb.org/3/movie'

  constructor( private http: HttpClient) { 
    
    this.loadLocalStorage();
  }

  get movieHistory(){
    return [...this._movieHistory];
  }

  private organizeMovie(movie:string){
    movie = movie.toLocaleLowerCase();

    //Evita elemntos duplicados en el arreglo
    if(this._movieHistory.includes(movie)){
      this._movieHistory = this._movieHistory.filter((oldMovie)=> oldMovie !== movie);
    }

    //el nuevo elemnto pasa a la primera posicion
    this._movieHistory.unshift(movie);

    //limita la lista a 10 elementos
    this._movieHistory = this._movieHistory.splice(0,10);

    this.saveLocalStorage();

  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._movieHistory))
  }

  private loadLocalStorage():void{
    
    if(!localStorage.getItem('history')) return;

    this._movieHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._movieHistory.length === 0) return;
    this.searchMovie(this._movieHistory[0])

  }

  searchMovie(movie:string):void{

    if(movie.length === 0) return;
    this.organizeMovie(movie);

    const params = new HttpParams()
    .set('query',movie)
    .set('api_key',this.apiKey)
    .set('include_adult','false')
    .set('language','es-ES')
    .set('page','1')
    
    this.http.get<SearchResponse>(`${this.apiUrl}/movie?`,{params})
    .subscribe(response =>{
      
      this.movieList = response.results;
      console.log(this.movieList);
    })
      
    //this._movieHistory.unshift(movie);
    //console.log(this.movieHistory);
  }

  searchImageMovie(id:number):void{

    // const params = new HttpParams()
    // .set('api_key',this.apiKey)
    // .set('include_image_language','es')
    // .set('language','es-ES')

    // this.http.get<SearchImages>(`${this.apiUrlImage}/${id}/images?`,{params})
    // .subscribe(response => {
      
    //   this.imageMovies = response.backdrops
    //   console.log(this.imageMovies);

    // })
  
  }

}
