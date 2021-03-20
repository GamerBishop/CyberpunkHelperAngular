export class Reseau{
    Id : number;
    NomReseau : string;
    Commentaire :string;

    constructor(_id:number, _nomReseau : string, _commentaire : string){
        this.Id = _id;
        this.NomReseau= _nomReseau;
        this.Commentaire = _commentaire;
    }
}