import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LaunchUtilService {
    

    private launchStatusList:{abbrev:string}[]=
                    [
                         { abbrev:'Hold' },
                         { abbrev:'In Flight' },
                         { abbrev:'Partial Failure' },
                         { abbrev:'Failure' },
                         { abbrev:'Success' },
                         { abbrev:'TBD' },
                         { abbrev:'Go' },
                         { abbrev:'TBC' }                         
                    ];
                    
    getBadgeColor(statusAbbrev:string):string{
       let filteredAbbrev = this.launchStatusList.filter(item=>item.abbrev.toLowerCase()===statusAbbrev.toLowerCase()).map(item=>item.abbrev.toLowerCase())[0];
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
}