import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
  getUsers()
  {
    return USERS;
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
