import { AstronautModel } from "./astronauts.model";
import { spacecraft_stage } from "./launchInfo.model";
import { LaunchPadModel } from "./launchPads.model";
import { LaunchServiceProviderModel } from "./launchServiceProvider.model";
import { LaunchStatusModel } from "./launchStatus.model";
import { LaunchUpdatesModel } from "./launchUpdates.model";

export class LaunchDetailModel {
    constructor(
        public name:string,
        public image:string,
        public status : LaunchStatusModel,
        public updates: LaunchUpdatesModel[],
        public net:string,
        public launch_service_provider:LaunchServiceProviderModel,        
        public rocket: {spacecraft_stage:spacecraft_stage},
        public customCrewMembers : AstronautModel[],
        public pad:LaunchPadModel,
    ){}
}