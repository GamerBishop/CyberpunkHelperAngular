export class CompetencesPerso{
    PersoId : number;
    CompId: number ;
    Nom : string  ;
    Type : string  ;
    NiveauComp : number;

    constructor(PersoId : number, CompId : number, Nom : string, Type : string, Niveau : number){
            this.PersoId = PersoId;
            this.CompId = CompId;
            this.Type = Type;
            this.Nom = Nom;
            this.NiveauComp = Niveau;
    }
}