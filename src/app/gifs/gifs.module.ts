import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent,
    SearchBoxComponent,
    MovieListComponent,
    MovieCardComponent,
  ]
})
export class GifsModule { }
