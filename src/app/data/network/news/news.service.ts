import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http'

/* RxJS */
import { map, timeout } from 'rxjs/operators'
import { Observable } from 'rxjs'

/* CONSTANTS */
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';

/* MODELS */
import { ListNewsResponse, NewsDetailResponse } from '../../models/response/news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  /* URL & ENDPOINT */
  private microservicePath = environment.msPath;

  constructor( private http: HttpClient) { }

  public getNewsList(paramsRequest: HttpParams): Observable<HttpResponse<ListNewsResponse[]>>{
    return this.http.get<ListNewsResponse[]>(this.microservicePath.news, {
      params: paramsRequest,
      observe: 'response'
    })
    .pipe( timeout(TIME_OUT) )
    .pipe( map( response => {
      return response;
    }));
  }

  public getNewsDetailService(idNews: string): Observable<NewsDetailResponse> {
    return this.http.get<NewsDetailResponse>( this.microservicePath.news + idNews ).pipe(timeout(TIME_OUT));
  }

   public postCreateNews(news): Observable<NewsDetailResponse> {
    return this.http.post<NewsDetailResponse>(this.microservicePath.news, news)
           .pipe( timeout(TIME_OUT) )
           .pipe( map( response => {
              return response;
            })
           );
  }
}
