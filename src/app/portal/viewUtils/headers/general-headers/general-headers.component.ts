import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/* ANGULAR MATERIAL */
import { MatDialog } from '@angular/material/dialog';

/* IMPORTACIONES DE FORMULARIO */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* MODELS */
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DIALOG_WIDTH_SM, DIALOG_WIDTH_XL } from 'src/app/portal/utils/constantsApp';

@Component({
  selector: 'app-general-headers',
  templateUrl: './general-headers.component.html',
  styleUrls: ['./general-headers.component.scss']
})
export class GeneralHeadersComponent implements OnInit {

  @Input() dataInput: HeaderModel;
  @Output() updateTable = new EventEmitter<boolean>();
  @Output() searchValue = new EventEmitter<string>();

  //TEXTOS
  public searchLabel: string;
  public searchButtonLabel: string;
  public txtTitle:string;

  //FORM
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  //FLAGS
  public flagButton: boolean;
  public flagSearch: boolean;

  constructor(private formBuilder: FormBuilder,
      private dialogController: MatDialog) { 

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required ]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    this.searchLabel = this.dataInput.TEXT_PLACEHOLDER;
    this.searchButtonLabel = this.dataInput.TEXT_ADD_BUTTON;
    this.txtTitle = this.dataInput.TITLE;

    this.flagButton =this.dataInput.FLAG_ACTIVE_BUTTON;
    this.flagSearch= this.dataInput.FLAG_ACTIVE_SEARCH;
  }

  public openDialog(){
    const openDialog = this.dialogController.open(this.dataInput.COMPONENT_DIALOG, {
      disableClose: true,
      width: (this.dataInput.WIDTH_DIALOG === undefined ) ? DIALOG_WIDTH_XL : this.dataInput.WIDTH_DIALOG,
    });

    openDialog.afterClosed().subscribe( (dialogClose: boolean) =>{
      console.log("modal cerrado ", dialogClose);
      this.updateTable.emit(dialogClose);
    })
  }

  public searchValueEnter(){
    this.searchValue.emit(this.searchInput.value);
  }

}
