import { Component, OnInit } from '@angular/core';

/* MODELS */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';
import { NotificationsSentModel, NotificationsToSendModel } from 'src/app/data/models/response/notifications/notifications';

/* CONSTANTS & UTILS*/
import * as TextES from '../../../utils/textsConstantsES';
import { DIALOG_WIDTH_MD, LIST_NOTIFICATIONS_TO_SEND, LIST_SENT_NOTIFICATIONS, PIPE, PLUS, SPACE } from 'src/app/portal/utils/constantsApp';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

/* SERVICE */
import { NotificationsService } from 'src/app/data/network/notifications/notifications.service';

/* MOCKS */
import { NOTIFICATION_TO_SEND, NOTIFICATIONS_SENT } from 'src/app/data/models/local/table-mocks';
import { DialogAddNotificationComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-notification/dialog-add-notification/dialog-add-notification.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {


  //TEXTOS
  public txtEs = TextES.NOTIFICATIONS;
  public txtButtons = TextES.BUTTONS;

  //INPUTS
  public dataToSend: HeaderModel;
  public dataTableToSend: DataTableModel;

  public dataTableToSend2: DataTableModel

  //TABLE ONE
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  //TABLE TWO
  public dataTableList2: StructDataTableModel[];
  private dataTable2: StructDataTableModel;
  public lengthDataTable:number;

  constructor( private dto: GeneralStructsService,
                private api: NotificationsService,
                public utilities: GeneralFunctionsService ) {
      
    this.dataTableList = [];
    this.dataTableList2 = [];
    this.validateNotificationsToSend();
    this.validateNotificationsSent();
    this.getNotificationsToSend(0, 10);
    this.getNotificationsSent(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createHeaderStruct(this.txtEs.TITLE, SPACE, PLUS + SPACE + this.txtButtons.ADD_NOTIFICATION, false, true, DialogAddNotificationComponent);
  }

  private getNotificationsToSend(page: number, size: number){
    NOTIFICATION_TO_SEND.forEach( (item: NotificationsToSendModel) =>{
      this.dataTable = {
        COLUMN_ONE: item.title,
        COLUMN_TWO: item.description,
        COLUMN_THREE: this.utilities.getFormatDate(item.programmed) + SPACE + PIPE + SPACE + this.utilities.getFormatHour(item.programmed),
        COLUMN_FOUR: item.concurrent,
        COLUMN_FIVE: this.txtButtons.VIEW,
        COLUMN_SIX: this.txtButtons.DELETE_INACTIVE,
      }
      this.dataTableList.push(this.dataTable);
    });
    this.dataTableToSend = this.dto.createStructTable(
      this.txtEs.TABLE_HEADERS,
      this.dataTableList,
      false,
      true,
      true,
      parseInt('10', 10),
      true,
    );
  }

  private getNotificationsSent(page: number, size: number){
    NOTIFICATIONS_SENT.forEach( (item:NotificationsSentModel) =>{
      this.dataTable2 = {
        COLUMN_ONE: item.title,
        COLUMN_TWO: item.description,
        COLUMN_THREE: item.addedBy,
        COLUMN_FOUR: this.utilities.getFormatDate(item.sent) + SPACE + PIPE + SPACE + this.utilities.getFormatHour(item.sent),
        COLUMN_FIVE: this.txtButtons.DELETE_INACTIVE,
      }
      this.dataTableList2.push(this.dataTable2);
    });
  }


  /**
   * @description Método para verificar si el localStorage tiene informacion almacenada para la seccion de notificaciones por enviar
   */
  private validateNotificationsToSend(){
    if(localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND) === null){
      localStorage.setItem(LIST_NOTIFICATIONS_TO_SEND, JSON.stringify(NOTIFICATION_TO_SEND));
    }
  }

  /**
   * @description Método para verificar si el localStorage tiene informacion almacenada para la seccion de notificaciones enviadas
   */
  private validateNotificationsSent(){
    if(localStorage.getItem(LIST_SENT_NOTIFICATIONS) === null){
      localStorage.setItem(LIST_SENT_NOTIFICATIONS, JSON.stringify(NOTIFICATIONS_SENT));
    }
  }

  public changePageTable(event: any){
    
  }

}
