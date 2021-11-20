import { Injectable } from '@angular/core';

/* Internet */
import { HttpClient } from '@angular/common/http';

/* RXJs */
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/* Constants and environment */
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private microServicioPath = environment.msPath;

  constructor( private http: HttpClient ) { }


  public getNewsListService( params: any ) {
    return this.http.get( this.microServicioPath.news, params ).pipe( timeout(TIME_OUT) );
  }
}
