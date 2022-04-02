import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/services/http/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading=false;
  
  constructor(public loader:LoaderService){}

  ngOnInit(){
      this.loader.loading$.subscribe((value)=>{
        Promise.resolve(null).then(()=> this.isLoading=value);
      })     
  }
}
