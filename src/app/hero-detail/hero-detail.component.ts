import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
  
import {Observable, of} from 'rxjs'; 

import {MatButtonModule} from '@angular/material/button';

import { HeroServService } from '../hero-serv.service';
import {Hero} from '../../classes/hero'; 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  _myHero!: Hero;
  tempHeroObservable : Observable<Hero> = new Observable<Hero>();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroServService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.heroService.getHero(id).subscribe(hero => this._myHero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save() : void{
    this.heroService.updateHero(this._myHero as Hero);
  }
}
