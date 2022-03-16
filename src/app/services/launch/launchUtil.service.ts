import { Injectable } from "@angular/core";
import { LaunchStatusModel } from "src/app/models/launch/launchStatus.model";
import { LaunchUpdatesModel } from "src/app/models/launch/launchUpdates.model";

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
}