import { Component, OnInit } from '@angular/core';

/* CONSTANTS & UTILITIES */
import { BUTTONS, DIALOG_ADD_WORKTEAMS, ERROR_MESSAGE } from 'src/app/portal/utils/textsConstantsES';

/* FORMULARIO */
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ProjectDetail } from 'src/app/data/models/response/projects/projects';

/* MODELS */
import { StructDataTableModel } from 'src/app/data/models/local/tableModels';

/* RxJS */
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/* ANGULAR MATERIAL */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/* MOCKS */
import { COLLABORATORS_LIST_MOCK } from 'src/app/data/models/local/general-mocks';
import { LIST_WORK_TEAMS } from 'src/app/portal/utils/constantsApp';

@Component({
  selector: 'app-dialog-add-team',
  templateUrl: './dialog-add-team.component.html',
  styleUrls: ['./dialog-add-team.component.scss']
})
export class DialogAddTeamComponent implements OnInit {

  //TEXTOS
  public txtEs = DIALOG_ADD_WORKTEAMS;
  public btnText = BUTTONS;
  public errorMessages = ERROR_MESSAGE;

   //FORM 
  public addForm: FormGroup;
  public area: AbstractControl;
  public emaillead: AbstractControl;
  public activities: AbstractControl;

  //AUTOCOMPLETE
  public collaboratorsAutocomplete = new FormControl();
  public filteredList: Observable<string[]>;

  //Lists
  public collaboratorsAdded: string[];
  public activitiesAdded: string[];

  //TABLE
  public dataTableLocal: StructDataTableModel;

  constructor( private formBuilder: FormBuilder,
              private dialog: MatDialogRef<DialogAddTeamComponent>) { 

    //Construccion del formulario
    this.addForm = this.formBuilder.group({
      area: ['', Validators.compose([Validators.required, Validators.pattern('[a-z A-Z Ññ]{3,30}') ])],
      emaillead: ['', Validators.compose([Validators.required, Validators.email])],
      activities: ['', Validators.compose([Validators.required, Validators.pattern('[a-z A-Z Ññ]{3,30}') ])],
    });

    this.area = this.addForm.controls.area;
    this.emaillead = this.addForm.controls.emaillead;
    this.activities = this.addForm.controls.activities;


  }

  ngOnInit(): void {
    this.collaboratorsAdded =[];
    this.activitiesAdded = [];

    this.filteredList = this.collaboratorsAutocomplete.valueChanges.pipe(
      startWith(''),
      map( value => this.filter(value))
    );
  }

  /**
   * @description Método que nos ayuda a filtrar el contenido de una lista. Es usado para el autocomplete
   * @param collaborator (string) Valor que se usa para buscar dentro de la lista
   * @returns (string[]) lista filtrada
   */
  private filter(collaborator: string): string[]{
    const value = collaborator.toLowerCase();

    return COLLABORATORS_LIST_MOCK.filter( filterOption => filterOption.toLowerCase().includes(value) );
  }

  /**
   * @description Método encargado de agregar un colaborador a la lista
   */
  public addCollaborators():void{
    this.collaboratorsAdded.push(this.collaboratorsAutocomplete.value);
    console.log(this.collaboratorsAdded.length);
    this.collaboratorsAutocomplete.setValue('');
  }

  /**
   * @description Método encargado de agregar una actividad a la lista
   */
  public addActivity(): void{
    this.activitiesAdded.push(this.activities.value)
    console.log(this.activitiesAdded.length);
    this.activities.reset();
  }

  /**
   * @description Método que servira para la eliminacion de nuestra lista de colaboradores
   * @param position (number) Posicion del elemento a eliminar
   */
  public removeCollaborator(position: number): void{
    if(this.collaboratorsAdded.length > 1){
      this.collaboratorsAdded.splice(position, 1);
    }else{
      this.collaboratorsAdded =[];
    }
  }

  /**
   * @description Método que servira para la eliminacion de nuestra lista de actividades
   * @param position (number) Posicion del elemento a eliminar
   */
  public removeActivity(position: number): void{
    if(this.activitiesAdded.length > 1){
      this.activitiesAdded.splice(position, 1);
    }else{
      this.activitiesAdded =[];
    }
  }

  /**
   * @description Método para agregar los valores a la tabla
   */
  public addValues(): void{

    console.log(localStorage.getItem(LIST_WORK_TEAMS));
    const valuesList = (localStorage.getItem(LIST_WORK_TEAMS) !== null) ? JSON.parse(localStorage.getItem(LIST_WORK_TEAMS)) : [];

    this.dataTableLocal = {
      COLUMN_ONE: this.area.value,
      COLUMN_TWO: this.emaillead.value,
      COLUMN_THREE: this.collaboratorsAdded.length.toString(),
      COLUMN_FOUR: this.activitiesAdded.length.toString(),
      COLUMN_FIVE: this.btnText.VIEW
    };

    valuesList.push(this.dataTableLocal);
    console.log(valuesList);
    localStorage.setItem(LIST_WORK_TEAMS, JSON.stringify(valuesList));
    this.dialog.close();

  }


}
