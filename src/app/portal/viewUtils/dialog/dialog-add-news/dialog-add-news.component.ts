import { Component, OnInit } from '@angular/core';

/* Importaciones de form */
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/* Importaciones de constantes y utilidades */
import { DIALOG_NEWS, BUTTONS, ERROR_MESSAGE } from 'src/app/portal/utilis/TextsConstantsES';
import { CREATE_NEWS_CONSTANTS } from 'src/app/portal/utilis/ConstantsService';
import { JPEG_FORMAT, JPG_FORMAT, PNG_FORMAT } from 'src/app/portal/utilis/ConstantsApp';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';

/* Importación de API's */
import { NewsApiService } from 'src/app/data/network/news/news-api.service';

/* Importaciones de Angular Material */
import { MatDialogRef } from '@angular/material/dialog';
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
  public imageURL: any;

  // Flag
  private readyToSend: boolean;

  constructor( private formBuilder: FormBuilder,
               private utils: GeneralFunctionsService,
               private api: NewsApiService,
               private dialog: MatDialogRef<DialogAddNewsComponent> ) {

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
    this.onProcessImage(event[0]);
  }


  /**
   * @description Método para la captura de la imagen por medio de un input.
   * @param event Imagen adjunta por medio del modal de Input
   */
  public uploadByInput(event: any) {

    if ( event.target.files[0] !== undefined ) {
      this.onProcessImage(event.target.files[0]);
    }

  }

  public saveItem(): void {}

  public publishNews(): void {

    if ( this.addForm.valid && this.readyToSend ) {
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.HEADLINE, this.title.value);
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.SUMMARY, this.description.value);
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.BODY, this.description.value);

      this.api.postCreateNews(this.generalFormData).subscribe( (data) => {
        try {
          this.dialog.close(false);
        } catch (err) {
          this.utils.onAlertMessage(this.txtError.BAD_INSERT, this.textButtons.OK);
        }
      }, errorResponse => {
        this.utils.onAlertMessage(this.txtError.BAD_REQUEST, this.textButtons.OK);
      });
    }

  }


  /**
   * @description Método encargado de procesar la imagen para almacenar en la variable de FormData
   * MultiPart y renderizarla en una etiqueta img de nuestro HTML
   * @param image Imagen adjunta
   */
  private onProcessImage(image: any): void {

    if ( image.type === PNG_FORMAT || image.type === JPG_FORMAT || image.type === JPEG_FORMAT ) {
      // Asignacion de nombre de la imagen a nuestra variable
      this.imgLargeName = image.name;

      // Inserción de datos para FormData y activación de bandera
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.IMAGE, image, this.imgLargeName);
      this.readyToSend = true;

      // Procesamiento de imagen cargada para poderla visualizar
      const imageRender = new FileReader();
      imageRender.readAsDataURL(image);

      imageRender.onload = () => {
        this.imageURL = imageRender.result;
      };
    } else {
      this.utils.onAlertMessage( this.txtError.INVALID_FILE_FORMAT, this.textButtons.OK );
    }
  }

}
