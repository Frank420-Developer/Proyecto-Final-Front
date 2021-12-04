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


  /**
   * @description Método para obtener el listado de noticias.
   * @param params (HttpParams) Página y tamaño de la lista
   * @returns (ListNewsResponse[]) Lista con las noticias
   */
  public getNewsListService( params: HttpParams ): Observable<ListNewsResponse[]> {
    return this.http.get<ListNewsResponse[]>( this.microServicioPath.news, { params } )
    .pipe( timeout(TIME_OUT) )
    .pipe( map( response => {
      return response;
    } ) );
  }


  /**
   * @description Método que obtiene los detalles de la noticia.
   * @param idNews (string) ID de la noticia de la que se desea obtener los detalles.
   * @returns (NewsDetailResponse) Objeto con los detalles de la noticia
   */
  public getNewsDetailService(idNews: string): Observable<NewsDetailResponse> {
    return this.http.get<NewsDetailResponse>( this.microServicioPath.news + idNews ).pipe(timeout(TIME_OUT));
  }


  public postCreateNews(news) {
    return this.http.post(this.microServicioPath.news, news)
           .pipe( timeout(TIME_OUT) )
           .pipe( map( response => {
              return response;
            })
           );
  }

}
