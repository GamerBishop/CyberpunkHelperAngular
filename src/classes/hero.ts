export class Hero{
    Id: number =0;
    Nom : string ="A";
    Classe : string ="B";
    Intelligence : number=0;
    Reflexes : number=0;
    Dexterite : number=0;
    Technique : number=0;
    Prestance : number=0;
    Volonte : number=0;
    Chance : number =0; 
    Mouvement : number=0;
    Corps : number=0;
    Empathie : number=0;

    constructor(Id: number, Nom : string, Classe : string, Intelligence : number, Reflexes : number, 
        Dexterite: number,Technique: number, Prestance: number, Volonte: number, Chance: number, Mouvement: number,
        Corps: number,Empathie: number){
        this.Id=Id;
        this.Nom =Nom;
        this.Classe = Classe;
        this.Intelligence =Intelligence;
        this.Reflexes =Reflexes;
        this.Dexterite=Dexterite;
        this.Technique =Technique;
        this.Prestance =Prestance;
        this.Volonte =Volonte;
        this.Chance =Chance;
        this.Mouvement =Mouvement;
        this.Corps =Corps;
        this.Empathie =Empathie;

    }
    
}