import { Injectable } from '@angular/core';

/* Importaciones de HTTP */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

/* Importaciones de modelos */
import { NotificationToSendModel, NotificationSentModel } from '../../models/response/notifications/NotificationsResponse';

/* Importación de constantes, utiliades */
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';

/* Importación de RxJS */
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService {

  private msPath = environment.msPath.notification;
  private endPoints = environment.endPoint;

  constructor( private http: HttpClient ) { }


  /**
   * @description Método que realiza la petición http al servicio para la obtención del listado de
   *              notificaciones por enviar.
   * @param paramsRequest (HttpParams) parámetros solicitados por el servicio [page, size]
   * @returns (NotificationToSendModel[]) listado de notificaciones por enviar
   */
  public getNotificationsToSendApi(
    paramsRequest: HttpParams ): Observable<HttpResponse<NotificationToSendModel[]>> {
      return this.http.get<NotificationToSendModel[]>(
        this.msPath + this.endPoints.notificationToSend,
        {
          params: paramsRequest,
          observe: 'response'
        }).pipe(
          timeout( TIME_OUT )
         ).pipe(
           map( response => {
             return response;
           })
         );
    }

  /**
   * @description Método que realiza la petición http al servicio para la obtención del listado de
   *              notificaciones enviadas.
   * @param paramsRequest (HttpParams) parámetros solicitados por el servicio [page, size]
   * @returns (NotificationSentModel[]) listado de notificaciones por enviar
   */
  public getNotificationsSentApi(
    paramsRequest: HttpParams ): Observable<HttpResponse<NotificationSentModel[]>> {
      return this.http.get<NotificationSentModel[]>(
        this.msPath + this.endPoints.notificationSent,
        {
          params: paramsRequest,
          observe: 'response'
        }).pipe(
          timeout( TIME_OUT )
          ).pipe(
            map( response => {
              return response;
            })
          );
    }
}
