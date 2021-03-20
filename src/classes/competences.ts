export class Competences{
    Id: number ;
    Nom : string  ;
    Type : string  ;
    Description : string;

    constructor(Id : number, Nom : string, Type : string, Description : string){
            this.Id = Id;
            this.Type = Type;
            this.Nom = Nom;
            this.Description = Description;
    }
}