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
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.getlaunchesByType();
    })
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  }

  onFilterChange(selectEvent: any): void {
    this.getlaunchesByType(selectEvent.target.value);
  }

  private getlaunchesByType(filterType: string = "") {

    let params: { name: string, value: string }[] = [];

    params.push({ name: 'mode', value: 'detailed' });
    params.push({ name: 'hide_recent_previous', value: 'true' });
    if (filterType) {
      params.push({ name: 'is_crewed', value: 'true' });
    }

    this.launchServiceSubscription = this.launchService.getPreviousLaunches(params)
      .subscribe(data => {
        this.launchList = data;
      });

  }

}
