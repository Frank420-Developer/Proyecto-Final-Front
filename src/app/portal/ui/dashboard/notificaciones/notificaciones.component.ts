import { Component, OnInit } from '@angular/core';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/TableModels';
import { NotificationToSendModel, NotificationSentModel } from 'src/app/data/models/response/notifications/NotificationsResponse';

/* Constants & utils */
import { NOTIFICATIONS, BUTTONS } from 'src/app/portal/utilis/TextsConstantsES';
import { LIST_NOTIFICATIONS_TO_SEND, LIST_SENT_NOTIFICATIONS, PIPE, SPACE } from 'src/app/portal/utilis/ConstantsApp';

import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';

/* Importación de servicios */
import { NotificationsApiService } from 'src/app/data/network/notifications/notifications-api.service';

/* Importación de Mocks */
import { NOTIFICATION_TO_SEND, NOTIFICATION_SENT } from 'src/app/data/models/local/TableMocks';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {

  // Text
  public textEs = NOTIFICATIONS;
  private txtButton = BUTTONS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;

  // Table
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  public dataTableListLocal: StructDataTableModel[];
  private dataTableLocal: StructDataTableModel;


  constructor( private dto: GeneralStructsService,
               private api: NotificationsApiService,
               private utilities: GeneralFunctionsService, ) {

    // Inicializaciones
    this.dataTableList = [];
    this.dataTableListLocal = [];
    this.validateNotificationToSend();
    this.validateNotificationSent();
    this.getNotificationsToSend(0, 10);
    this.getNotificationsSent(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      SPACE,
      this.txtButton.ADD_NOTIFICATION,
      false,
      true,
      '');
  }


  /**
   * @description Método encargado de validar si tenemos información almacenada en localStorage para 
   * la sección de notificaciones por enviar.
   */
  private validateNotificationToSend() {
    if ( localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND) === null ) {
      localStorage.setItem(LIST_NOTIFICATIONS_TO_SEND, JSON.stringify(NOTIFICATION_TO_SEND) );
    }
  }

  /**
   * @description Método encargado de validar si tenemos información almacenada en localStorage para 
   * la sección de notificaciones enviadas.
   */
  private validateNotificationSent() {
    if ( localStorage.getItem(LIST_SENT_NOTIFICATIONS) === null ) {
      localStorage.setItem(LIST_SENT_NOTIFICATIONS, JSON.stringify(NOTIFICATION_SENT));
    }
  }


  private getNotificationsToSend(page: number, size: number) {

    NOTIFICATION_TO_SEND.forEach( (item: NotificationToSendModel) => {
      this.dataTable = {
        COLUMN_ONE: item.title,
        COLUMN_TWO: item.description,
        COLUMN_THREE: this.utilities.getFormatDate(item.programmed) + PIPE + this.utilities.getFormatHour(item.programmed),
        COLUMN_FOUR: item.concurrent,
        COLUMN_FIVE: this.txtButton.VIEW,
        COLUMN_SIX: this.txtButton.DELETE_INACTIVE,
      };
      this.dataTableList.push(this.dataTable);
    });

    this.tableDataToSend = this.dto.createStructTable(
      this.textEs.TABLE_HEADERS,
      this.dataTableList,
      false,
      true,
      true,
      parseInt('10', 10),
      true
    );

  }


  private getNotificationsSent(page: number, size: number) {

    NOTIFICATION_SENT.forEach( (item: NotificationSentModel) => {
      this.dataTableLocal = {
        COLUMN_ONE: item.title,
        COLUMN_TWO: item.description,
        COLUMN_THREE: item.addedBy,
        COLUMN_FOUR: this.utilities.getFormatDate(item.sent) + PIPE + this.utilities.getFormatHour(item.sent),
        COLUMN_FIVE: this.txtButton.DELETE_INACTIVE
      };
      this.dataTableListLocal.push(this.dataTableLocal);
    });

  }

  public changePageTable(page: number) {
    this.getNotificationsToSend(page, 10);
  }

}
