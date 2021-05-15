export class Quote {
    showDetails: boolean;
    like:number;
    dislike: number;
    constructor(public author:string, public quote:string,public per:string, public date: Date){
        this.showDetails = true;
        this.like =0;
        this.dislike = 0;
    }
}
