import { LaunchServiceProviderModel } from "./launchServiceProvider.model";

export class AstronautModel {
    constructor(
        public role:{role:string,priority:number},
        public astronaut : 
            { 
                id:number,
                name:string,
                type:{name:string},
                status:{name:string},
                agency:LaunchServiceProviderModel,
                date_of_birth:string,
                date_of_death:string | null,
                nationality:string,
                twitter:string | null,
                instagram:string | null,
                wiki: string | null,
                bio:string | null,
                profile_image:string | null,
                first_flight:string | null,
                last_flight:string | null
            }
    ){}
}