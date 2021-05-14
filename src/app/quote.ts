export class Quote {
    showDetails: boolean;
    constructor(public author:string, public quote:string,public per:string, public date: Date){
        this.showDetails = false;
    }
}
