import { Component, OnInit } from '@angular/core';

/* FORM */
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

/* CONSTANTS */
import { CREAR_FIRMA, ERROR_MESSAGE } from 'src/app/portal/utils/textsConstantsES';

/* SERVICES */
import { CreateSignService } from 'src/app/data/network/postCreateSign/create-sign.service';
import { CreateSignResponse } from 'src/app/data/models/response/createSign/createSign';
import { CreateBodyToCreateSign } from 'src/app/data/models/request/createSign/createSign';

/* ROUTER */
import { Router } from '@angular/router';
import { LOGO_NAAT_TECH } from 'src/app/portal/utils/imagesRoutes';
import { UserInfoModel } from 'src/app/data/models/response/login/login';
import { USER_INFO } from 'src/app/portal/utils/constantsApp';

@Component({
  selector: 'app-crear-firma',
  templateUrl: './crear-firma.component.html',
  styleUrls: ['./crear-firma.component.scss']
})
export class CrearFirmaComponent implements OnInit {

  public addForm: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public phone: AbstractControl;


  public txtError = ERROR_MESSAGE;
  public textES = CREAR_FIRMA;
  public logoNaatTech = LOGO_NAAT_TECH;

  public userInfo: UserInfoModel;
  public imgUser: string;

  public createResponse: CreateSignResponse;

      // Flags
  public activeSpinner = false;
  

  constructor( private formBuilder: FormBuilder,
               private api: CreateSignService,
               private router: Router) { 
    this.addForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-z A-Z ñÑ]{10,20}')])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10,11}')])],
    });

    this.name = this.addForm.controls.name;
    this.email = this.addForm.controls.email;
    this.phone = this.addForm.controls.phone;
  }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    this.imgUser = this.userInfo.photo;
  }

  public postCreateSign(){
    const body: CreateBodyToCreateSign = {
      name: this.name.value,
      email: this.email.value,
      phone: '+521'+this.phone.value
    }
    this.api.postCreateSign(body).subscribe( (data: CreateSignResponse) =>{
      try {
        console.log(data);
        this.createResponse = data;
        this.activeSpinner = true;
        this.router.navigate(['../dashboard']);
      } catch (error) {
        this.activeSpinner = true;
      }
    }, errorResponse => {});
    
  }

}
