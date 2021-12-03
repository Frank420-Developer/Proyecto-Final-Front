import { Component, OnInit } from '@angular/core';

/* Importaciones de form */
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/* Importaciones de constantes y utilidades */
import { DIALOG_NEWS, BUTTONS, ERROR_MESSAGE } from 'src/app/portal/utilis/TextsConstantsES';
import { JPG_FORMAT, PNG_FORMAT } from 'src/app/portal/utilis/ConstantsApp';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';

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

  // Images
  private imgLargeName: string;
  private generalFormData = new FormData();

  constructor( private formBuilder: FormBuilder,
               private utils: GeneralFunctionsService ) {

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


  /**
   * @description Método encargado de procesar eventos inesperados al momento de la carga de la imagen.
   * @param imageFile Imagen adjunta
   */
  public dragOverHandler( imageFile: any ): void {
    imageFile.preventDefault();
    imageFile.stopPropagation();
  }


  /**
   * @description Método para la captura de imagen por medio del método drag and drop.
   * @param event Imagen adjunta
   */
  public dropHandler(event: any): void {
    event.preventDefault();
    console.log('Drag And Drop', event);
  }


  /**
   * @description Método para la captura de la imagen por medio de un input.
   * @param event Imagen adjunta por medio del modal de Input
   */
  public uploadByInput(event: any) {
    if ( event.target.files[0].type === PNG_FORMAT || event.target.files[0].type === JPG_FORMAT ) {
      this.imgLargeName = event.target.files[0].name;

      this.generalFormData.append('banner', event.target.files[0], this.imgLargeName);
    } else {
      this.utils.onAlertMessage( this.txtError.INVALID_FILE_FORMAT, this.textButtons.OK );
    }

  }

  public saveItem(): void {}

  public publishNews(): void {}

}
