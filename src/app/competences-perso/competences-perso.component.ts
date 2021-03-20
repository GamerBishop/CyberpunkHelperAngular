import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetencesPerso } from '../../classes/CompetencesPerso';

//Material Components
import {MatChipsModule} from '@angular/material/chips';


import { CompetencesService } from '../competences.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-competences-perso',
  templateUrl: './competences-perso.component.html',
  styleUrls: ['./competences-perso.component.css']
})
export class CompetencesPersoComponent implements OnInit {

  _CompetencesPersos : CompetencesPerso[] = [];   

  //#region CompetencesHandling
  constructor(
    private compService: CompetencesService, 
    private messageService: MessageService,
    private route: ActivatedRoute) { }

    
  getCompetencesByPerso(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.compService.getCompetencesByPerso(id)
        .subscribe(competences => this._CompetencesPersos = competences);
  }

  //#endregion

  ngOnInit(): void {
    this.getCompetencesByPerso();
  } 
}
