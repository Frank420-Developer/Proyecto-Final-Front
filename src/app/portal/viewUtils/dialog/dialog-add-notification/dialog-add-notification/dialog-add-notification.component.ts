import { Component, OnInit } from '@angular/core';

/* ANGULAR MATERIAL CORE */
import { DateAdapter } from '@angular/material/core';

/* FORM */
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CURRENCY_NOTIFICATION } from 'src/app/data/models/local/general-mocks';

/* CONSTANTS */
import { BUTTONS, DIALOG_ADD_NOTIFICATION, ERROR_MESSAGE } from 'src/app/portal/utils/textsConstantsES';
import { COLONS, DATE_FORMAT, LIST_NOTIFICATIONS_TO_SEND, SPACE } from 'src/app/portal/utils/constantsApp';
import { NewNotification } from 'src/app/data/models/request/notifications/notification';

/* DIALOG */
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-notification',
  templateUrl: './dialog-add-notification.component.html',
  styleUrls: ['./dialog-add-notification.component.scss']
})
export class DialogAddNotificationComponent implements OnInit {

  //TEXTOS
  public txtEs = DIALOG_ADD_NOTIFICATION;
  public errorMessages = ERROR_MESSAGE;
  public txtButtons = BUTTONS;

  //FORM
  public addForm: FormGroup;
  public headline: AbstractControl;
  public description: AbstractControl;
  public typeSelect: AbstractControl;
  public dateImplementation:AbstractControl;
  public hourImplementation: AbstractControl;

  //DATE
  public minDate: any;
  private date = new Date();
  private day: number;
  private month: number;
  private year: number;

  //HOUR
  private currentTime: string;

  //FLAG
  public hideDatePicker = true;

  public notificationType = CURRENCY_NOTIFICATION;

  constructor( private formBuilder: FormBuilder,
              private dateAdapter: DateAdapter<any>,
              private dialog: MatDialogRef<DialogAddNotificationComponent>) { 
    this.currentTime = this.date.getHours() + COLONS + ((this.date.getMinutes() < 10) ? '0' + this.date.getMinutes() : this.date.getMinutes());

    this.addForm = this.formBuilder.group({
      headline: ['', Validators.compose([Validators.required, 
                                          Validators.pattern('[a-z A-Z ñÑ]{1,16}'), 
                                          Validators.maxLength(16)
                                        ])
                ],
      description: ['', Validators.compose([Validators.required, 
                                            Validators.pattern('[a-z A-Z ñÑ]{1,27}'), 
                                            Validators.maxLength(27)
                                          ])
                    ],
      typeSelect: ['' ],
      dateImplementation: [''],
      hourImplementation: [this.currentTime, Validators.required]
    });
    this.headline = this.addForm.controls.headline;
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
    console.log(this.currentTime);
  }

  public getNotificationDate(event): void{
    
  }

  public checkType(){
    this.hideDatePicker = this.typeSelect.value === this.notificationType[0] ? false : true;
  }

  public sendData(){

    const valuesList = (localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND) === null) ? [] : JSON.parse(localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND));

    const newData: NewNotification = {
      title: this.headline.value,
      description: this.description.value,
      type: this.typeSelect.value,
      implementationDate: (this.hideDatePicker) ? this.dateImplementation.value : SPACE,
      implementationHour: this.hourImplementation.value,
      createdBy: 'Admin'
    };

    valuesList.push(newData);
    localStorage.setItem(LIST_NOTIFICATIONS_TO_SEND, JSON.stringify(valuesList));
    this.dialog.close(valuesList);
  }

}
