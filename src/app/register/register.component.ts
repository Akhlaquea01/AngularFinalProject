import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user={
  firstName:'Akhlaque',
  lastName:'Ahmad',
  dob:"1999-09-14",
  email:'akhlaquea01@gmail.com',
  password:'Pass@123'
}
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(user: any){
    console.log(user);
  }
}
