import { Component, Input, OnInit } from '@angular/core';
import { LaunchInfoModel } from 'src/app/models/launch/launchInfo.model';

@Component({
  selector: 'app-single-launch-card',
  templateUrl: './single-launch-card.component.html',
  styleUrls: ['./single-launch-card.component.css']
})
export class SingleLaunchCardComponent implements OnInit {

  @Input() launchInfo!:LaunchInfoModel;

  constructor() { }

  ngOnInit(): void {      
  }

}
