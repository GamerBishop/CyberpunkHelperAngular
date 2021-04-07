import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Etage } from 'src/classes/etages';
import { Reseau } from 'src/classes/Reseau';
import { MessageService } from './message.service';

export interface ReseauInsert{
  NomReseau : string;
  Description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReseauService {


  

  private ReseauxUrl = 'http://192.168.1.35/applijdr/GetReseaux.php';  // URL to web api 
  private ReseauByIdUrl = 'http://192.168.1.35/applijdr/GetReseauById.php?Id=';
  private EtagesReseauxUrl = 'http://192.168.1.35/applijdr/GetEtagesReseaux.php?ReseauId=';

  private RESEAUX: Observable<Reseau[]> = new Observable<Reseau[]>();

  getAllReseaux(): Observable<Reseau[]> {
    this.RESEAUX = this.http.get<Reseau[]>(this.ReseauxUrl).pipe(
      catchError(this.handleError<Reseau[]>('getAllReseaux', [])));
    this.messageService.add('ReseauxService : Reseaux fetched');
    return this.RESEAUX;
  }

   getReseauById(id : number) : Observable<Reseau>{
    this.messageService.add(`ReseauService: fetched Reseau id=${id}`); 
    return this.http.get<Reseau>(this.ReseauByIdUrl + id.toString()).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Reseau>(`getReseauById id=${id}`))
    ); 
  }
  
  
  getEtagesReseauById(id: number) : Observable<Etage[]> { 
    this.messageService.add(`ReseauService: fetched Etages from Reseau id=${id}`);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8' 
      })
    };

    return this.http.get<Etage[]>(this.EtagesReseauxUrl + id.toString()).pipe(
      tap(_ => this.log(`fetched etages reseaux id=${id}`)),
      catchError(this.handleError<Etage[]>(`getEtagesReseauById id=${id}`))
    ); 
  }
 

  
  SaveNewReseau(data: Reseau) : Observable<Reseau> {
    this.messageService.add('ReseauxService : Reseau added');
    return this.http.post<Reseau>("http://192.168.1.35/applijdr/SaveNewReseau.php?Id="+data.Id+"&NomReseau="+data.NomReseau+"&Description="+data.Commentaire, Reseau, undefined).pipe(
tap((data: Reseau) => {
        return this.log(`added reseau w/ id=${data.NomReseau}`);
      }), catchError(this.handleError<Reseau>('SaveNewReseau', )));
    
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
