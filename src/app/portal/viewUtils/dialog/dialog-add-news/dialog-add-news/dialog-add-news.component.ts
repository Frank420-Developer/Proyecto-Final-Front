import { Component, OnInit } from '@angular/core';
import { BUTTONS, DIALOG_ADD_NEW, ERROR_MESSAGE } from 'src/app/portal/utils/textsConstantsES';


/* FORMULARIO */
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

/* CONSTANTS */
import { JPEG_FORMAT, JPG_FORMAT, PNG_FORMAT } from 'src/app/portal/utils/constantsApp';
import { CREATE_NEWS_CONSTANTS } from 'src/app/Portal/utils/constantsService';

/* UTILITIES */
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

/* SERVICES  */
import { NewsService } from 'src/app/data/network/news/news.service';

/* Importaciones de Angular Material */
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-news',
  templateUrl: './dialog-add-news.component.html',
  styleUrls: ['./dialog-add-news.component.scss']
})
export class DialogAddNewsComponent implements OnInit {

  //TEXTOS
  public txtEs = DIALOG_ADD_NEW;
  public txtButtons = BUTTONS;
  public errorMessages = ERROR_MESSAGE;

  //FORM
  public addForm: FormGroup;
  public headline: AbstractControl;
  public description: AbstractControl;

  //INPUT-FILE
  private imgLargeName: string;
  private generalFormData = new FormData();
  public imageURL: any;

   // Flag
  private readyToSend: boolean;

  constructor( private formbuilder: FormBuilder,
                private utilities: GeneralFunctionsService,
              private api: NewsService,
               private dialog: MatDialogRef<DialogAddNewsComponent>) {
    this.addForm = this.formbuilder.group({
      headline: ['', Validators.compose( [Validators.required, Validators.pattern('[a-z A-Z ñÑ]{1,50}')] )],
      description: ['', Validators.compose( [Validators.required, Validators.pattern('[a-z A-Z ñÑ]{1,250}')] )]
    });

    this.headline = this.addForm.controls.headline;
    this.description = this.addForm.controls.description;
  }

  ngOnInit(): void {
  }

  /**
   * @description Método que se encarga de procesar eventos inesperados al momento de la carga
   * @param imgFile Imagen recibida
   */
  public dragOverHandler( imgFile: any): void{
    imgFile.preventDefault();
    imgFile.stopPropagation();
  }

  /**
   * @description Método para la captura de imagen por medio del método drag and drop
   * @param event Imagen adjunta
   */
  public dropHandler( event: any):void{
     this.onProcessImage(event[0]);
  }

  /**
   * @description Método de la captura de la imagen por medio de un input
   * @param event Imagen adjunta
   */
  public uploadByInput(event:any){
    if ( event.target.files[0] !== undefined ) {
      this.onProcessImage(event.target.files[0]);
    }
  }

  public dragLeave(event: any){
    console.log(event);
  }

  public saveItem(){

  }

  public publishNews(){
     if ( this.addForm.valid && this.readyToSend ) {
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.HEADLINE, this.headline.value);
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.SUMMARY, this.description.value);
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.BODY, this.description.value);

      this.api.postCreateNews(this.generalFormData).subscribe( (data) => {
        try {
          this.dialog.close(false);
        } catch (err) {
          this.utilities.onAlertMessage(this.errorMessages.BAD_INSERT, this.txtButtons.OK);
        }
      }, errorResponse => {
        this.utilities.onAlertMessage(this.errorMessages.BAD_REQUEST, this.txtButtons.OK);
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
      this.utilities.onAlertMessage( this.errorMessages.INVALID_FILE_FORMAT, this.txtButtons.OK );
    }
  }


}
