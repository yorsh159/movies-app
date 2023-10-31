import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazy-images.component.html',

})
export class LazyImagesComponent implements OnInit{
  
  @Input()
  public url!: string;
  
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;
  
  ngOnInit(): void {
    if(!this.url) throw new Error('URL es requerida.');
  }

  

  onLoad(){
    console.log('ImageLoad')
    this.hasLoaded = true;
  }
}
