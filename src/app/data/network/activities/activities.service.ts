import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

/* RxJS */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* CONSTANTS & ENVIRONMENT */
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';
import { ActivityListModel } from '../../models/response/activities/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  //URL
  private microservicePath = environment.msPath.activities;

  constructor(private http: HttpClient) { }


  public getActivitiesList(paramsRequest: HttpParams): Observable<HttpResponse<ActivityListModel[]>>{
    return this.http.get<ActivityListModel[]>(this.microservicePath, {
      params: paramsRequest,
      observe: 'response',
    }).pipe(timeout(TIME_OUT)).pipe(map(response => {
      return response;
    }));
  }
}
