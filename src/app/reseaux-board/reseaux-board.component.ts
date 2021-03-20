import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'; 
import {MatTableModule, MatTableDataSource} from '@angular/material/table';  

import { DataSource } from '@angular/cdk/table';

import {Reseau} from '../../classes/Reseau';
import {ReseauService} from '../reseau-service.service';
import {LoginService} from '../login-service.service';

export interface ReseauxData { 
  Id : number;
  NomReseau: string;
  Commentaire: string;
}

@Component({
  selector: 'app-reseaux-board',
  templateUrl: './reseaux-board.component.html',
  styleUrls: ['./reseaux-board.component.css']
})
export class ReseauxBoardComponent implements OnInit {
  
  _Reseaux : Reseau[] = []; 
  _UserRole! : string ;

  //Table behavior elements
  displayedColumns: string[] = ['Id', 'NomReseau', 'Commentaire'];
  resSource: MatTableDataSource<ReseauxData>;

  constructor(private _reseauService : ReseauService, private _loginService : LoginService) { 
    this.resSource = new MatTableDataSource<ReseauxData>(this._Reseaux);
  }

  
  getAllReseaux(): void {
    this._reseauService.getAllReseaux()
        .subscribe(reseaux => {this._Reseaux = reseaux;
          this.resSource.data = this._Reseaux;});
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.resSource.filter = filterValue.trim().toLowerCase();
 
  }
  getUserRole() : void{ 
    this._UserRole = this._loginService.getRole();
  }

  ngOnInit(): void {
    this.getUserRole();
    this.getAllReseaux();
    
  }

}
