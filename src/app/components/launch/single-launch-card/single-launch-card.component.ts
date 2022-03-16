import { Component, Input, OnInit, Self } from '@angular/core';
import { LaunchInfoModel } from 'src/app/models/launch/launchInfo.model';
import { LaunchUtilService } from 'src/app/services/launch/launchUtil.service';

@Component({
  selector: 'app-single-launch-card',
  templateUrl: './single-launch-card.component.html',
  styleUrls: ['./single-launch-card.component.css'],
  providers:[LaunchUtilService]
})
export class SingleLaunchCardComponent implements OnInit {

  @Input() launchInfo!:LaunchInfoModel;
  
  constructor(@Self() public launchUtilService:LaunchUtilService) { }

  ngOnInit(): void {      
  }

}
