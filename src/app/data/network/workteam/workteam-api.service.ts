import { Injectable } from '@angular/core';

/* Importaciones de http */
import { HttpClient } from '@angular/common/http';

/* Importaciones de los modelos */
import { WorkTeamListResponse } from '../../models/response/workTeam/WorkTeamResponse';

/* RxJS */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* Importaciones de constantes, entornos y utlidades */
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';

@Injectable({
  providedIn: 'root'
})
export class WorkteamApiService {
  private msPath = environment.msPath;

  constructor( private http: HttpClient ) { }


  public getWorkTeamListApi(): Observable<WorkTeamListResponse[]> {
    return this.http.get<WorkTeamListResponse[]>(this.msPath.workTeam)
      .pipe(timeout(TIME_OUT))
      .pipe( map( response => {
        return response;
      })
    );
  }
}
