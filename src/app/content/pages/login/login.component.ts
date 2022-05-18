import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!:string
  password!:string
  mouseoverLogin:any


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  hide = true;

  login(formValues:any )
  {

    this.authService.loginUser(formValues.username
    ,formValues.password)

    this.route.navigate(['home'])

    console.log(formValues)
  }
  cancel()
  {
     this.route.navigate(['home'])
  }

}
