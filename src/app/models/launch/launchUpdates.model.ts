export class LaunchUpdatesModel {
    constructor(
        public profile_image:string,
        public comment:string|null,
        public info_url:string|null,
        public created_by:string,
        public created_on:string
    ){}
}