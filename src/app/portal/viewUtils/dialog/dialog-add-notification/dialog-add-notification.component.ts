import { Component, OnInit } from '@angular/core';

/* Angular material core */
import { DateAdapter } from '@angular/material/core';

/* Importaciones de form */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* Models */
import { NewNotification } from 'src/app/data/models/request/notifications/NotificationRequest';
import { CURRENCY_NOTIFICATION } from 'src/app/data/models/local/GeneralMocks';

/* Importación de constantes y utilidades */
import { DIALOG_NOTIFICATIONS, BUTTONS, ERROR_MESSAGE } from 'src/app/portal/utilis/TextsConstantsES';
import { COLONS, DATE_FORMAT, LIST_NOTIFICATIONS_TO_SEND, SPACE } from 'src/app/portal/utilis/ConstantsApp';

/* Importaciones de angular material */
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-notification',
  templateUrl: './dialog-add-notification.component.html',
  styleUrls: ['./dialog-add-notification.component.scss']
})
export class DialogAddNotificationComponent implements OnInit {

  // Textos
  public textES = DIALOG_NOTIFICATIONS;
  public txtError = ERROR_MESSAGE;
  public textButtons = BUTTONS;

  // Form
  public addForm: FormGroup;
  public title: AbstractControl;
  public description: AbstractControl;
  public typeSelect: AbstractControl;
  public dateImplementation: AbstractControl;
  public hourImplementation: AbstractControl;

  // List
  public listCurrency = CURRENCY_NOTIFICATION;

  // Date
  public minDate: any;
  private date = new Date();
  private day: number;
  private month: number;
  private year: number;

  // Hour
  private currentTime: string;

  // Flag
  public hideDatePicker = true;

  constructor( private formBuilder: FormBuilder,
               private dateAdapter: DateAdapter<any>,
               private dialog: MatDialogRef<DialogAddNotificationComponent> ) {

    // Time
    this.currentTime = this.date.getHours() + COLONS + this.date.getMinutes();

    // Construccion del formulario
    this.addForm = this.formBuilder.group({
      title: ['',
        Validators.compose([ Validators.required, Validators.pattern('[a-z A-Z ñÑ]{1,16}'),
        Validators.maxLength(16)])
      ],
      description: ['',
        Validators.compose([ Validators.required, Validators.pattern('[a-z A-Z ñÑ]{1,27}')])
      ],
      typeSelect: ['', Validators.required],
      dateImplementation: [''],
      hourImplementation: [ this.currentTime, Validators.required ]
    });

    this.title = this.addForm.controls.title;
    this.description = this.addForm.controls.description;
    this.typeSelect = this.addForm.controls.typeSelect;
    this.dateImplementation = this.addForm.controls.dateImplementation;
    this.hourImplementation = this.addForm.controls.hourImplementation;
  }

  ngOnInit(): void {
    this.dateAdapter.setLocale(DATE_FORMAT);

    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.minDate = new Date(this.year, this.month, this.day);
  }


  public getNotificationDate(event): void {
    console.log(event.targetElement.value);
  }

  public checkType() {
    this.hideDatePicker = (this.typeSelect.value === this.listCurrency[0]) ? false : true;
  }


  public sendData() {

    const valuesList = (localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND) === null) ? []
    : JSON.parse(localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND));

    const newData: NewNotification = {
      title: this.title.value,
      description: this.description.value,
      type: this.typeSelect.value,
      implementationDate: (this.hideDatePicker) ? this.dateImplementation.value : SPACE,
      implementationHour: this.hourImplementation.value,
      createBy: 'Admin'
    };

    valuesList.push(newData);
    localStorage.setItem(LIST_NOTIFICATIONS_TO_SEND, JSON.stringify(valuesList));
    this.dialog.close();
  }

}
