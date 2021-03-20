import { Injectable } from '@angular/core';     
import {Observable, of} from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, find } from 'rxjs/operators';

import { Hero } from '../classes/hero';
import { MessageService } from './message.service';

//import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroServService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private heroesUrl = 'http://192.168.1.35:80/applijdr/GetHeroes.php';  // URL to web api
  private heroesUpdateUrl = 'http://192.168.1.35:80/applijdr/UpdateHero.php';
  private heroByIdUrl = 'http://192.168.1.35:80/applijdr/GetHeroById.php?id='

  private HEROES : Observable<Hero[]> =new Observable<Hero[]>();
  private HEROBYID : Observable<Hero> = new Observable<Hero>();

  getHeroes(): Observable<Hero[]> {
    this.HEROES =this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    ) ;
    this.messageService.add('HeroService: fetched heroes'); 
    return this.HEROES; 
  }

  getHero(Id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched Hero id=${Id}`); 
    return this.http.get<Hero>(this.heroByIdUrl + Id.toString()).pipe(
      tap(_ => this.log(`fetched hero id=${Id}`)),
      catchError(this.handleError<Hero>(`getHero id=${Id}`))
    ); 
  }

  updateHero(hero: Hero): void {
    var tempUrl = this.heroesUpdateUrl + '?id='+hero.Id.toString()+'&Nom='+hero.Nom.toString() + '&Classe='+hero.Classe.toString()+'&Intel='+hero.Intelligence.toString()
    +'&Ref='+hero.Reflexes.toString()+'&Dex='+hero.Dexterite.toString()+'&Tech='+hero.Technique.toString()+'&Pres='+hero.Prestance.toString()+'&Vol='+hero.Volonte.toString()
    +'&Cha='+hero.Chance.toString()+'&Mouv='+hero.Mouvement.toString() + '&Cor='+hero.Corps.toString() +'&Emp='+hero.Empathie.toString();

     this.http.post<Observable<Hero>>(tempUrl,null,this.httpOptions).subscribe(() => this.log('Update running'));
     this.log('Update done');
  }
 
  /** Log a HeroService message with the MessageService */
  public log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
}
