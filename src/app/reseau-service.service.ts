import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reseau } from 'src/classes/Reseau';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ReseauService {

  private ReseauxUrl = 'http://192.168.1.35/applijdr/GetReseaux.php';  // URL to web api 

  private RESEAUX: Observable<Reseau[]> = new Observable<Reseau[]>();

  getAllReseaux(): Observable<Reseau[]> {
    this.RESEAUX = this.http.get<Reseau[]>(this.ReseauxUrl).pipe(
      catchError(this.handleError<Reseau[]>('getAllReseaux', [])));
    this.messageService.add('ReseauxService : Reseaux fetched');
    return this.RESEAUX;
  }



  /** Log a HeroService message with the MessageService */
  public log(message: string) {
    this.messageService.add(`ReseauService: ${message}`);
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
  

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
}
