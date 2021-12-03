import { Component, OnInit } from '@angular/core';

/* Importaciones de form */
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/* Importaciones de constantes y utilidades */
import { DIALOG_NEWS, BUTTONS, ERROR_MESSAGE } from 'src/app/portal/utilis/TextsConstantsES';

@Component({
  selector: 'app-dialog-add-news',
  templateUrl: './dialog-add-news.component.html',
  styleUrls: ['./dialog-add-news.component.scss']
})
export class DialogAddNewsComponent implements OnInit {

  // Texts
  public textES = DIALOG_NEWS;
  public textButtons = BUTTONS;
  public txtError = ERROR_MESSAGE;

  // Form
  public addForm: FormGroup;
  public title: AbstractControl;
  public description: AbstractControl;

  constructor( private formBuilder: FormBuilder ) {

    // Construccion del formulario
    this.addForm = this.formBuilder.group({
      title: ['', Validators.compose( [ Validators.required, Validators.pattern('[a-z A-Z]{1,50}') ] )],
      description: ['', Validators.compose( 
        [ Validators.required, Validators.pattern('[a-z A-Z]{1,250}') ]
      )]
    });

    this.title = this.addForm.controls.title;
    this.description =  this.addForm.controls.description;
  }

  ngOnInit(): void {
  }

  public saveItem(): void {}

  public publishNews(): void {}

}
