import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

/*  MODELS  */
import { NotificationsSentModel, NotificationsToSendModel } from '../../models/response/notifications/notifications';

/* CONTANTS, UTILITIES */
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';

/* RxJS */
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  //URL & ENDPOINTS
  private micriservicePath = environment.msPath.notifications;
  private endsPoints = environment.endPoint;

  constructor( private http: HttpClient ) { }

  /**
   * @description Método que realiza la peticion http al servicio para el listado de las notificaciones por enviar
   * @param paramsRequest (HttpParams) parametros solicitados por el servicio [page,size]
   * @returns (NotificationsToSendModel[]) listado de notificaciones por enviar
   */
  // public getNotificationsToSendList(paramsRequest: HttpParams): Observable<HttpResponse<NotificationsToSendModel[]>>{
  //   return this.http.get<NotificationsToSendModel[]>(this.micriservicePath + this.endsPoints.notificationsToSend, {
  //     params: paramsRequest,
  //     observe: 'response'
  //   })
  //   .pipe(timeout(TIME_OUT))
  //   .pipe(map(response => {
  //     return response;
  //   }));
  // }

  // /**
  //  * @description Método que realiza la peticion http al servicio para el listado de las notificaciones enviadas
  //  * @param paramsRequest (HttpParams) parametros solicitados por el servicio [page,size]
  //  * @returns (NotificationsSentModel[]) listado de notificaciones enviadas
  //  */
  // public getNotificationsSentList(paramsRequest: HttpParams): Observable<HttpResponse<NotificationsSentModel[]>>{
  //   return this.http.get<NotificationsSentModel[]>(this.micriservicePath + this.endsPoints.notificationsSent, {
  //     params: paramsRequest,
  //     observe: 'response'
  //   })
  //   .pipe(timeout(TIME_OUT))
  //   .pipe(map(response => {
  //     return response;
  //   }));
  // }
}
