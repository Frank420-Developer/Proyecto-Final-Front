import { Component, OnInit } from '@angular/core';

/* Importaciones de form */
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

/* Modelos */
import { NewClient } from 'src/app/data/models/request/clients/ClientesRequest';

/*  Importacion de constantes y utlidades */
import { PLUS, SPACE } from 'src/app/portal/utilis/ConstantsApp';
import { DIALOG_CLIENT, BUTTONS, ERROR_MESSAGE } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';

/* Importacion de servicios */
import { ClientesApiService } from 'src/app/data/network/clientes/clientes-api.service';

/* Importaciones de angular Material */
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-client',
  templateUrl: './dialog-add-client.component.html',
  styleUrls: ['./dialog-add-client.component.scss']
})
export class DialogAddClientComponent implements OnInit {
  
  // Textos
  public textES = DIALOG_CLIENT;
  public textButtons = BUTTONS;
  public txtError =  ERROR_MESSAGE;
  public txtAddButton: string;

  // Form
  public addForm: FormGroup;
  public clientName: AbstractControl;

  // List
  public addList: NewClient[] = [];

  constructor( private api: ClientesApiService,
               private utilities: GeneralFunctionsService,
               private dialog: MatDialogRef<DialogAddClientComponent>,
               private formBuilder: FormBuilder ) {

    // Construccion de formulario
    this.addForm = this.formBuilder.group({
      clientName: ['', Validators.compose([ Validators.required, Validators.pattern('[a-z A-Z]{1,50}') ])]
    });

    this.clientName = this.addForm.controls.clientName;

    this.txtAddButton = PLUS + SPACE + this.textButtons.ADD_MORE;
  }

  ngOnInit(): void {
  }


  /**
   * @description Método encargado de agregar un nuevo item a la lista que será enviada al servicio.
   */
  public addNew(): void {
    const newItem: NewClient = {
      key: this.utilities.generateProjectKey(this.clientName.value),
      name: this.clientName.value,
      description: this.clientName.value + SPACE + this.utilities.generateProjectKey(this.clientName.value)
    };

    this.addList.push(newItem);
  }


  /**
   * @description Método que realiza un recorrido por nuestra lista y manda a llamar al consumo del
   *              servicio.
   */
  public createNewItem(): void {
    this.addList.forEach( (item: NewClient) => {
      this.postCreateNewClient(item);
    });

    this.dialog.close(false);
  }


  /**
   * @description Método que consume el servicio para agregar a un nuevo item
   * @param item (NewClient) artículo a agregar.
   */
  private postCreateNewClient( item: NewClient ): void {
    this.api.postCreateClientApi(item).subscribe( (dataResponse) => {
      try {
        //
      } catch (err) {}
    }, errorResponse => {}
    );
  }

}
