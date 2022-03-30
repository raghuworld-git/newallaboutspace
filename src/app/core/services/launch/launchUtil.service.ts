import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'  
})
export class LaunchUtilService {
  private launchStatusList: { abbrev: string }[] =
    [
      { abbrev: 'Hold' },
      { abbrev: 'In Flight' },
      { abbrev: 'Partial Failure' },
      { abbrev: 'Failure' },
      { abbrev: 'Success' },
      { abbrev: 'TBD' },
      { abbrev: 'Go' },
      { abbrev: 'TBC' }
    ];
  getBadgeColor(statusAbbrev: string): string {
    let filteredAbbrev = this.launchStatusList.filter(item => item.abbrev.toLowerCase() === statusAbbrev.toLowerCase()).map(item => item.abbrev.toLowerCase())[0];
    switch (filteredAbbrev) {
      case 'tbc':
      case 'tbd':
      case 'hold':
        return 'warning';
      case 'in flight':
      case 'go':
      case 'success':
        return 'success';
      case 'artial failure':
      case 'failure':
        return 'danger';
      default:
        return 'primary';
    }
  }

  createYoutubeEmbedURL(url: string | null): string | null {
    if (url != null || url != "") {
      let tempURLArray = url!.split("watch?v=");
      if (tempURLArray === undefined || tempURLArray === null || tempURLArray.length <= 1) {
        return null;
      }
      else {
        return `https://www.youtube.com/embed/${tempURLArray[1].toString()}`;
      }
    }
    else {
      return null;
    }
  }

  getlaunchStatusList() {
    let statusList: { id: number, abbrev: string }[] = [
      {
        id: 1, abbrev: 'Go'
      },
      {id: 2, abbrev: 'TBD'},
      {id: 3, abbrev: 'Success'},
      {id: 4, abbrev: 'Failure'},
      {id: 5, abbrev: 'Hold'},
      {id: 6, abbrev: 'In Flight'},
      {id: 7, abbrev: 'Partial Failure'},
      {id: 8, abbrev: 'TBC'}
    ];

      return  of(statusList);
  }
}