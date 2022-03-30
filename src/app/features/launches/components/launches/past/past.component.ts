import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchService } from 'src/app/core/services/launch/launch-service.service';
import { LaunchInfoModel } from 'src/app/shared/models/launch/launchInfo.model';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private launchService: LaunchService,
    private renderer: Renderer2
  ) { }

  launchList: LaunchInfoModel[] = [];

  private launchServiceSubscription!: Subscription;

  ngOnInit(): void {
    this.getlaunchesByType();
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  }

  private getlaunchesByType(filterType: string = "") {           
    this.launchServiceSubscription = this.launchService.getPreviousLaunches(filterType)
      .subscribe(data => {
        this.launchList = data;
      });

  }

}
