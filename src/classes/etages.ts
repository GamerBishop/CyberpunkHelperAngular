export class Etage{
    Id : number;
    ReseauId : number;
    Niveau : number;
    Rencontre : string;
    Capacite : string;
    SD : number | undefined;

    constructor(id:number, reseauId : number, niveauId : number,rencontre : string, capacite:string, SD : number){
        this.Id = id;
        this.ReseauId = reseauId;
        this.Niveau = niveauId;
        this.Capacite = capacite;
        this.Rencontre = rencontre;
        if (SD != -1)
            this.SD =SD;
    }
}