import { Component, OnInit } from '@angular/core';

import {Hero} from '../../classes/hero';
//import {HEROES} from '../mock-heroes'
import {HeroServService} from '../hero-serv.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes : Hero[] = []; 

  constructor(private heroService: HeroServService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.Heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
