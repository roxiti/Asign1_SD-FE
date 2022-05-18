import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  private firstname!:FormControl
  private lastname!:FormControl
  private email!:FormControl
  private password!:FormControl
  profileForm!    :FormGroup

  ngOnInit(): void {
   this.firstname = new FormControl(this.authService.getFirstname(), [Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.lastname = new FormControl(this.authService.getLastname(), [Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.email = new FormControl(this.authService.getEmail(), [Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.password = new FormControl(this.authService.getPass())

    console.log(this.password)
    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password:this.password,

    })
  }
    cancel()
    {
      this.router.navigate(['home'])
    }

    saveProfile(formValues:any){
    if(this.profileForm.valid){

      console.log(this.profileForm)
      this.authService.updateCurrentUser(formValues,this.authService.getUser())
      this.router.navigate([''])
    }
    }

    validateLastName()
    {
      return this.lastname.valid || this.lastname.untouched
    }

  validateEmail()
  {
    return this.email.valid || this.email.untouched
  }

  validateFirstName()
  {
    return this.firstname.valid || this.firstname.untouched
  }


}
