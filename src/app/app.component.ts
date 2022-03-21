import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'All About Space';

  isLoading=false;
  
  constructor(public loader:LoaderService){}

  ngOnInit(){
      this.loader.loading$.subscribe((value)=>{
        Promise.resolve(null).then(()=> this.isLoading=value);
      })
  }
}
