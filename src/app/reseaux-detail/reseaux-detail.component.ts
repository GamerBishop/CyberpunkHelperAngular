import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Etage } from 'src/classes/etages';
import { Reseau } from 'src/classes/Reseau';
import { LoginService } from '../login-service.service';
import { NewEtageDialogComponent } from '../new-etage-dialog/new-etage-dialog.component';
import { ReseauService } from '../reseau-service.service';

@Component({
  selector: 'app-reseaux-detail',
  templateUrl: './reseaux-detail.component.html',
  styleUrls: ['./reseaux-detail.component.css']
})
export class ReseauxDetailComponent implements OnInit {

  columnsToDisplay = ['Niveau', 'Rencontre', 'Capacite', 'SD'];
  etaSource: MatTableDataSource<Etage>;

  maxId = -1;
  _myReseau! : Reseau;
  _myEtages : Etage[] = [];

  constructor(private route: ActivatedRoute, 
    private _reseauService : ReseauService, 
    private _loginService : LoginService, 
    public dialog : MatDialog,
    private location: Location) { 
      this.etaSource = new MatTableDataSource<Etage>();
    }

    
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getReseauInfo();
  }

  getReseauInfo(): void{
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this._reseauService.getReseauById(id).subscribe(eta => this._myReseau = eta);
    this._reseauService.getEtagesReseauById(id).subscribe(et => {
      this._myEtages = et;
      this._myEtages.forEach(eta => eta.Rencontre = eta.Rencontre.replace('', 'œ'));
      
      this.etaSource.data = this._myEtages;
      this._myEtages.forEach(eta =>{
        if ( eta.Id > this.maxId){
          this.maxId = eta.Id;
        }
      })
    });


    
  }

  newEtageDialog():void{
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;  
    dialogConfig.data = {
      id: 1,
      title: 'Nouvel étage'
  };
    const dialogRef = this.dialog.open(NewEtageDialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(data =>{
      this.maxId++;
      const newEtage = new Etage(this.maxId, this._myReseau.Id, data.niveauEtage, data.rencontre, data.action, data.sd);
      this._reseauService.SaveNewEtage(newEtage).subscribe(eta => {
                                                                this._myEtages.push(eta);
                                                                this.etaSource.data = this._myEtages;    
                                                              });
    }); 


  }
  

}
