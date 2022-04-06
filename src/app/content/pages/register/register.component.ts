import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,private route: Router) { }

  userName!:string
  password!:string
  lastName!:string
  firstName!:string
  mouseoverLRegister:any

  ngOnInit( ): void {
  }


  hide = true;

  register(formValues:any )
  {

    this.authService.registerUser(formValues.userName
      ,formValues.password,formValues.firstName, formValues.lastName)

    this.route.navigate(['home'])

    console.log(formValues)
  }
  cancel()
  {
    this.route.navigate(['home'])
  }
}
