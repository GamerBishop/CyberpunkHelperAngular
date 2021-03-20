import { Injectable } from '@angular/core';     
import {Observable, of} from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Competences } from '../classes/competences';
import { MessageService } from './message.service';
import { CompetencesPerso } from '../classes/CompetencesPerso';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  
  private CompetencesUrl = 'http://192.168.1.35/applijdr/GetCompetences.php';  // URL to web api
  private CompetencesByPersoUrl = 'http://192.168.1.35/applijdr/GetCompetencesFromPerso.php?persoId='

  private COMPETENCES : Observable<Competences[]> = new Observable<Competences[]>();
  private COMPETENCESBYPERSO : Observable<CompetencesPerso[]> = new Observable<CompetencesPerso[]>();

  getAllCompetences() : Observable<Competences[]>{
    this.COMPETENCES = this.http.get<Competences[]>(this.CompetencesUrl).pipe(
      catchError(this.handleError<Competences[]>('getAllCompetences', [])));
    this.messageService.add('CompetencesService : Competences fetched');
    return this.COMPETENCES;
  } 

  getCompetencesByPerso(persoId : number) : Observable <CompetencesPerso[]>{
    this.COMPETENCESBYPERSO = this.http.get<CompetencesPerso[]>(this.CompetencesByPersoUrl + persoId.toString()).pipe(
      catchError(this.handleError<CompetencesPerso[]>('getCompetencesByPerso', [])));
      this.messageService.add('CompetencesService : Competences fetched for Perso with Id ' +persoId.toString());
      return this.COMPETENCESBYPERSO;
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
