import { Component, OnInit } from '@angular/core';

/* Models */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';

/* Constants & utils */
import { NOTIFICATIONS, BUTTONS } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { SPACE } from 'src/app/portal/utilis/ConstantsApp';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {

  // Text
  public textEs = NOTIFICATIONS;
  private txtButton = BUTTONS;
  public dataToSend: HeaderModel;

  constructor( private dto: GeneralStructsService ) { }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      SPACE,
      this.txtButton.ADD_NOTIFICATION,
      false,
      true,
      '');
  }

}
