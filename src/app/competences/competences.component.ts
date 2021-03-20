import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'; 
import {MatSort} from '@angular/material/sort';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';  

import { DataSource } from '@angular/cdk/table';

//AppImport
import { Competences } from '../../classes/competences';
import { CompetencesService } from '../competences.service';
import { MessageService } from '../message.service';



export interface CompetencesData { 
  Id : number;
  Nom: string;
  Type: string;
  Description: string;
}




@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  _Competences : Competences[] = []; 

  //Table behavior elements
  displayedColumns: string[] = ['Id', 'Nom', 'Type', 'Description'];
  compSource: MatTableDataSource<CompetencesData>;
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort =new MatSort();

  constructor(private compService: CompetencesService, private messageService: MessageService) { 
    
    this.compSource = new MatTableDataSource<CompetencesData>(this._Competences);
  }

  getAllCompetences(): void {
    this.compService.getAllCompetences()
        .subscribe(competences => {this._Competences = competences;
          this.compSource.data = this._Competences;});
  }

  //#region Table Functionnalities Handling

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.compSource.filter = filterValue.trim().toLowerCase();
 
  }

  //#endregion



  ngOnInit(): void {
    this.getAllCompetences();
  }

  ngAfterViewInit() {
    this.compSource = new MatTableDataSource<CompetencesData>(this._Competences);
    //this.compSource.paginator = this.paginator;
    this.compSource.sort = this.sort;
  }
}
