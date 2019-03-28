import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
userForm:any={
  "Name":"",
  "Phone":"",
  "Email":"",
  "Password":""
}
  constructor() { }

  ngOnInit() {
  }

  register_user(){
// api call
   console.log('userForm',this.userForm);
  }

}
