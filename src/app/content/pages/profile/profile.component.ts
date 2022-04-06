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

  private firstName!:FormControl
  private lastName!:FormControl
  profileForm!    :FormGroup

  ngOnInit(): void {
   this.firstName = new FormControl(this.authService.currentUser?.firstname, [Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authService.currentUser?.lastname, [Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
    cancel()
    {
      this.router.navigate(['home'])
    }

    saveProfile(formValues:any){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
      this.router.navigate([''])
    }
    }

    validateLastName()
    {
      return this.lastName.valid || this.lastName.untouched
    }

  validateFirstName()
  {
    return this.firstName.valid || this.firstName.untouched
  }


}
