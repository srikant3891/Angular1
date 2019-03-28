import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm:any={
    "Email":"",
    "password":""
  }
  constructor( private router:Router) { }

  ngOnInit() {
  }

  validate_user(){
  }

  redirect_register(){
   this.router.navigate(['/Register'])
  }
  
  redirect_home(){
    this.router.navigate(['/Home'])
   }

}
