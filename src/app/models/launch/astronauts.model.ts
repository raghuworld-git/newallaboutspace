import { LaunchServiceProviderModel } from "./launchServiceProvider.model";

export class AstronautModel {
    constructor(
        public role:{role:string,priority:number},        
        public astronaut : {
                id:number,                
                name:string,               
                profile_image:string | null                
        },
        public crewGroup?:string[],
    ){}
}