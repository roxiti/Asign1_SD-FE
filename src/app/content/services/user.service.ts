import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  async getUsers()
  {
    let users = await this.http.get("http://localhost:8080/users/getUsers").toPromise()

    return users

  }

  getUser(username:string)
  {
    return USERS.find(user => user.username == username)
  }

  checkUser(username:string, password: string)
  {
    return USERS.find(user => user.username == username && user.password == password)
  }
}

const USERS = [
  {

      username: 'maria',
      email: 'maria@123',
      password:'1234',
      firstname:'Maria',
      lastname:'Ioana',
      score:34,
      description:'I like turtles'

  },
  {
    username: 'mihai22',
    email: 'mihia@123',
    password:'parola12',
    firstname:'Mihai',
    lastname:'Eminescu',
    score:22,
    description:'I like poetry'

  }
]
