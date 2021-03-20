import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroServService } from '../hero-serv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  Heroes: Hero[] = [];

  constructor(private heroService: HeroServService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(Heroes => this.Heroes = Heroes.slice(1, 5));
  }
}