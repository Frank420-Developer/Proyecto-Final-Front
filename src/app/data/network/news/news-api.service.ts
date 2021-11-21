import { Injectable } from '@angular/core';

/* Internet */
import { HttpClient, HttpParams } from '@angular/common/http';

/* RXJs */
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

/* Constants and environment */
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';
import { ListNewsResponse, NewsDetailResponse } from '../../models/response/news/NewsResponse';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private microServicioPath = environment.msPath;

  constructor( private http: HttpClient ) { }


  public getNewsListService( params: HttpParams ): Observable<ListNewsResponse[]> {
    return this.http.get<ListNewsResponse[]>( this.microServicioPath.news, { params } )
    .pipe( timeout(TIME_OUT) )
    .pipe( map( response => {
      return response;
    } ) );
  }


  public getNewsDetailService(idNews: string): Observable<NewsDetailResponse> {
    return this.http.get<NewsDetailResponse>( this.microServicioPath.news + idNews ).pipe(timeout(TIME_OUT));
  }

}
