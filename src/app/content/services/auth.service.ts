import {Injectable} from "@angular/core";
import {IUser} from "../models/user.model";
import {UserService} from "./user.service";

@Injectable()
  export class AuthService {

    userService!: UserService
    currentUser: IUser | undefined

  loginUser(userName: string, password:string) {
    // @ts-ignore
    //this.currentUser = this.userService.checkUser(userName,password)
    if (USERS.find(user => user.username == userName && user.password == password) != null)
    { this.currentUser = USERS.find(user => user.username == userName && user.password == password)
    }
    else console.log("error 404")






     //  this.currentUser = {
     //    username: 'maria',
     //    password:'1234',
     //    firstname:'Maria',
     //    lastname:'Ioana',
     //    score:34
     //  }

    }

  registerUser(userName: string, password:string,firstName:string,lastName:string){
    // this.currentUser = this.userService.checkUser(userName,password)
    this.currentUser = {
      username: 'maria',
      password:'1234',
      firstname:'Maria',
      lastname:'Ioana',
      score:34
    }

  }


    isAuthenticated()
    {
      return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName: string)
    {
      // @ts-ignore
      this.currentUser?.firstname = firstName
      // @ts-ignore
      this.currentUser?.lastname = lastName
    }
  }
const USERS = [
  {

    username: 'maria',
    password:'1234',
    firstname:'Maria',
    lastname:'Ioana',
    score:34,
    description:'I like turtles'

  },
  {
    username: 'mihai22',
    password:'parola12',
    firstname:'Mihai',
    lastname:'Eminescu',
    score:22,
    description:'I like poetry'

  }
]

