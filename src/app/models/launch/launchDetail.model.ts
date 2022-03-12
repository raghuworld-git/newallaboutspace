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
        public launch_service_provider:LaunchServiceProviderModel
    ){}
}