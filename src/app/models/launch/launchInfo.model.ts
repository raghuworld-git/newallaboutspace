import { AstronautModel } from "./astronauts.model";
import { LaunchServiceProviderModel } from "./launchServiceProvider.model";
import { LaunchStatusModel } from "./launchStatus.model";

export class LaunchInfoModel {
    constructor(
        public slug:string,
        public name:string,
        public image:string | null,
        public status : LaunchStatusModel,
        public net:string,
        public launch_service_provider:LaunchServiceProviderModel,
        public rocket: { spacecraft_stage:spacecraft_stage}
    ){}  
}

export class spacecraft_stage {
    constructor (
        public destination:string,
        public launch_crew :AstronautModel[],
        public onboard_crew : AstronautModel[],
        public landing_crew : AstronautModel[]
        ){}
}