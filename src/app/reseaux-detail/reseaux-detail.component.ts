import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Etage } from 'src/classes/etages';
import { Reseau } from 'src/classes/Reseau';
import { LoginService } from '../login-service.service';
import { ReseauService } from '../reseau-service.service';

@Component({
  selector: 'app-reseaux-detail',
  templateUrl: './reseaux-detail.component.html',
  styleUrls: ['./reseaux-detail.component.css']
})
export class ReseauxDetailComponent implements OnInit {

  columnsToDisplay = ['Niveau', 'Rencontre', 'Capacite', 'SD'];

  _myReseau! : Reseau;
  _myEtages : Etage[] = [];

  constructor(private route: ActivatedRoute, 
    private _reseauService : ReseauService, 
    private _loginService : LoginService, 
    public dialog : MatDialog) { 

    }

  ngOnInit(): void {
    this.getReseauInfo();
  }

  getReseauInfo(): void{
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this._reseauService.getReseauById(id).subscribe(res => this._myReseau = res);
    this._reseauService.getEtagesReseauById(id).subscribe(et => {
      this._myEtages = et;
      this._myEtages.forEach(eta => eta.Rencontre = eta.Rencontre.replace('', 'œ'));
    });

    
  }

  

}
