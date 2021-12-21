import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/data/models/response/login/login';
import { USER_INFO } from 'src/app/portal/utils/constantsApp';


import { Router } from '@angular/router';
import { LOGO_NAAT_TECH } from 'src/app/portal/utils/imagesRoutes';

import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

    public userInfo: UserInfoModel;
  public imgUser: string;
  public username: string;

  public logoNaatTech = LOGO_NAAT_TECH;

  
  public camera_checked:boolean;
  public microphone_checked:boolean
  public location_checked:boolean;


  public form: FormGroup;
  public camera: AbstractControl;
  public microphone: AbstractControl;
  public location: AbstractControl;

  constructor( private router: Router, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      camera: ['', Validators.required],
      microphone: ['', Validators.required],
      location: ['', Validators.required]
    });


    this.camera = this.form.controls.camera;
    this.microphone = this.form.controls.microphone;
    this.location = this.form.controls.location;

    this.camera.setValue((localStorage.getItem('camera_checked') === 'true') ? true : false);
    this.microphone.setValue((localStorage.getItem('microphone_checked') === 'true') ? true : false);
    this.location.setValue((localStorage.getItem('location_checked') === 'true') ? true : false);
  }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    this.imgUser = this.userInfo.photo;
    this.username = this.userInfo.name;
  }


   public back(){
    this.router.navigate(['../dashboard']);
  }

  public saveSettings(){
    if(this.camera.value)
      localStorage.setItem('camera_checked', 'true');
    else
      localStorage.setItem('camera_checked', 'false');
    if(this.microphone.value)
      localStorage.setItem('microphone_checked', 'true');
    else
      localStorage.setItem('microphone_checked', 'false');
    if(this.location.value)
      localStorage.setItem('location_checked', 'true');
    else
      localStorage.setItem('location_checked', 'false');

    alert('los cambios se guardaron exitosamente!');
    this.router.navigate(['../dashboard']);
  }




}
