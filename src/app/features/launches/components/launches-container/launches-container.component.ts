import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launches-container',
  templateUrl: './launches-container.component.html',
  styleUrls: ['./launches-container.component.css']
})
export class LaunchesContainerComponent implements OnInit,OnDestroy {

  ngOnInit(): void {
   
  }



  ngOnDestroy(){
    
  }
}
