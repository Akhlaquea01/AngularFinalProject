import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  forgotPasswordClicked: boolean = false;
  dataVerified: boolean =false;;
  user={
    email:'akhlaquea01@gmail.com',
    password:''
  }
  userData={
    email:'akhlaquea01@gmail.com',
    dob:'',
    cNewPass:"",
    newPass:"",
  }
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(user: any){
    console.log(user);
    this._router.navigate(['/home']);
  }
  onForgot(user: any){
    console.log(user);
    this.dataVerified = true;
  }
  onReset(user: any){
    console.log(user);
  }
  forgotPasswordClickHandler(){
    this.forgotPasswordClicked = true;
  }
}
