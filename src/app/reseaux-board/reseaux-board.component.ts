import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'; 
import {MatTableModule, MatTableDataSource} from '@angular/material/table';  

import { DataSource } from '@angular/cdk/table';

import {Reseau} from '../../classes/Reseau';
import {ReseauService} from '../reseau-service.service';
import {LoginService} from '../login-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'; 
import { NewReseauDialogComponent } from '../new-reseau-dialog/new-reseau-dialog.component';

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
  maxId : number = -1;
  _UserRole! : string ;

  //Table behavior elements
  displayedColumns: string[] = ['Id', 'NomReseau', 'Commentaire'];
  resSource: MatTableDataSource<ReseauxData>;

  constructor(private _reseauService : ReseauService, private _loginService : LoginService, public dialog : MatDialog) { 
    this.resSource = new MatTableDataSource<ReseauxData>(this._Reseaux);
  }

  
  getAllReseaux(): void {
    this._reseauService.getAllReseaux()
        .subscribe(reseaux => {this._Reseaux = reseaux;
          //Set MaxId
          this._Reseaux.forEach(res =>{
            if ( res.Id > this.maxId){
              this.maxId = res.Id;
            }
          })
          this.resSource.data = this._Reseaux;});
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.resSource.filter = filterValue.trim().toLowerCase();
 
  }
  getUserRole() : void{ 
    this._UserRole = this._loginService.getRole();
  }

  onRowClicked( row: ReseauxData ) : void{  
    this.displayReseauDetails(row.Id);
  }
  
  displayReseauDetails(index: number) {
    throw new Error('Method not implemented.');
  }

  newReseauDialog():void{
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;  
    dialogConfig.data = {
      id: 1,
      title: 'Nouveau réseau'
  };
    const dialogRef = this.dialog.open(NewReseauDialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(data =>{
      this.maxId++;
      const newRes = new Reseau(this.maxId, data.nomReseau, data.description);
      this._reseauService.SaveNewReseau(newRes).subscribe(Res => {
                                                                this._Reseaux.push(newRes);
                                                                this.resSource.data = this._Reseaux;    
                                                              });
    }); 
  }

  ngOnInit(): void {
    this.getUserRole();
    this.getAllReseaux();
    
  }

}
