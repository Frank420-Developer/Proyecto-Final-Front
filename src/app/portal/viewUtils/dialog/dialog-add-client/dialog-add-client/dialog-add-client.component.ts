import { Component, OnInit } from '@angular/core';

/* CONSTANTS */
import { DIALOG_ADD_CLIENT, BUTTONS, ERROR_MESSAGE } from 'src/app/portal/utils/textsConstantsES';
import { PLUS, SPACE } from 'src/app/portal/utils/constantsApp';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';


/* FORMULARIO */
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

/* MODELS */
import { NewClient } from 'src/app/data/models/request/clients/clients';
import { ClientesService } from 'src/app/data/network/clients/clientes.service';


/* ANGULAR MATERIAL */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-client',
  templateUrl: './dialog-add-client.component.html',
  styleUrls: ['./dialog-add-client.component.scss']
})
export class DialogAddClientComponent implements OnInit {

  //TEXTOS
  public txtEs = DIALOG_ADD_CLIENT;
  public txtButtons = BUTTONS;
  public addMore: string;
  public errorMessages = ERROR_MESSAGE;

  //FORM 
  public addForm: FormGroup;
  public clientName: AbstractControl;

  //LISTAS
  public addList: NewClient[] = [];

  constructor( private formBuilder: FormBuilder,
              private api: ClientesService,
              private utilities: GeneralFunctionsService,
              private dialog: MatDialogRef<DialogAddClientComponent>) {

    this.addMore = PLUS + SPACE + this.txtButtons.ADD;

    this.addForm = this.formBuilder.group({
      clientName: ['', Validators.compose( [Validators.required, 
                                            Validators.pattern('[a-z A-Z ñÑ]{1,50}')])]
    });

    this.clientName = this.addForm.controls.clientName;
  }

  ngOnInit(): void {
  }

  /**
   * @description Método encargado de agregar un nuevo item a la lista que será enviada al servicio.
   */
  public addNew(){
    const newItem: NewClient = {
      key: this.utilities.generateProjectKey(this.clientName.value),
      name: this.clientName.value,
      description: this.clientName.value + SPACE + this.utilities.generateProjectKey(this.clientName.value)
    }
    this.addList.push(newItem);
    this.addForm.reset();

    this.addMore = (this.addList.length === 0) ? this.addMore : PLUS + SPACE + this.txtButtons.ADD_MORE;
  }

  /**
   * @description Método que realiza un recorrido por la lista de item y hace el llamado del método que realiza el consumo del servicio
   */
  public createNewItem(){
    this.addList.forEach( (item: NewClient) =>{
      this.postCreateNewClient(item);
    });
    this.dialog.close(false);
  }


  /**
   * @description Método que consume el servicio de clientes para agregar un nuevo item
   * @param item (NewClient) item a agregar al servicio
   */
  private postCreateNewClient(item: NewClient){
    this.api.postCreateClient(item).subscribe( (data: any) =>{
      try {
       //this.addList.push(data);
      } catch (error) {}
    }, errorResponse => {

    });
  }

  public removeItem(pos: number){
    if(this.addList.length > 1){
      this.addList.splice(pos, 1);
    }else{
      this.addList =[];
    }
    console.log(this.addList.length);
    this.addMore = (this.addList.length === 0) ? PLUS + SPACE + this.txtButtons.ADD : PLUS + SPACE + this.txtButtons.ADD_MORE;
  }

}
