import { LaunchStatusModel } from "./launchStatus.model";

export class LaunchInfoModel {
    constructor(
        public slug:string,
        public name:string,
        public image:string | null,
        public status : LaunchStatusModel
    ){}
}