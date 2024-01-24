export class card{
    constructor(id:number,title:string,description:string,image:string) {
        this.Id=id
    this.Title=title        
    this.Description=description        
    this.Image=image        
    }

    Title!:string;
    Description!:string;
    Image!:string;
    Id!:number;
}