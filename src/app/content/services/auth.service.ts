import {Injectable} from "@angular/core";
import {IUser} from "../models/user.model";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
  export class AuthService {

    userService!: any
    currentUser: any


  constructor(private http: HttpClient) {
  }

  getUser()
  {
    return localStorage.getItem('username')
  }

  getFirstname()
  {
    return localStorage.getItem('firstname')
  }

  getLastname()
  {
    return localStorage.getItem('lastname')
  }

  getEmail()
  {
    return localStorage.getItem('email')
  }

  getId()
  {
    return localStorage.getItem('id')
  }
  getPass()
  {
    return localStorage.getItem('pass')
  }
  getScore()
  {
   return this.currentUser.score;
  }

  async loginUser(username: string, password:string) {

    //this.currentUser = this.userService.checkUser(userName,password

      let USERS = await this.http.get("http://localhost:8080/users/getUsers").toPromise();
    /*  localStorage.setItem("name",username)
    localStorage.getItem("name")
    localStorage.removeItem("name")*/
      //  console.log(question )




    //@ts-ignore
    if (USERS.find(user => user.username === username && user.password === password) != null) {



      //@ts-ignore
      this.currentUser = USERS.find(user => user.username == username && user.password == password)

      console.log(this.currentUser)

    if(this.currentUser.ban == 0) {
      localStorage.setItem('id', this.currentUser.id)
      localStorage.setItem('username', this.currentUser.username)
      localStorage.setItem('pass', this.currentUser.password)
      localStorage.setItem('firstname', this.currentUser.firstname)
      localStorage.setItem('lastname', this.currentUser.lastname)
      localStorage.setItem('email', this.currentUser.email)
      localStorage.setItem('score', this.currentUser.score)

      console.log("intra aici")

      return true;
      }
      else {

        console.error("You are banned. You can no longer login into your account")
        return false;}
    }
    else {

      console.error("Invalid credentials")
      return false;

    }






    }

  async banUser(username:string):Promise<any>
  {

    let user = await this.http.get("http://localhost:8080/users/banUser?user="+username).toPromise();

    return user

  }

  async unbanUser(username:string):Promise<any>
  {

    let user = await this.http.get("http://localhost:8080/users/unbanUser?user="+username).toPromise();

    return user

  }

  async sendEmail(email:string):Promise<any>
  {

    let user = await this.http.get("http://localhost:8080/email/send?email="+email).toPromise();

    return user

  }

  async registerUser(formValue:any){

     this.http.post("http://localhost:8080/users/saveOneUser",formValue).toPromise();
   // console.log(formValue)



  }


    isAuthenticated()
    {
      const user = localStorage.getItem('username')
      console.log(localStorage.getItem('username'))

      if(user !== "admin")
        return !!user
      else return false

    }

  isAdmin()
  {
    const user = localStorage.getItem('username')
  //  console.log(localStorage.getItem('username'))

    if(user === "admin")
      return !!user
    else return false

  }

    async updateCurrentUser(input:any, user:any)
    {

      let USER = await this.http.post("http://localhost:8080/users/updateOneUser?user="+user,input).toPromise()


   //  console.log(USER)

      //@ts-ignore
      localStorage.setItem('username',USER.username)
      //@ts-ignore
      localStorage.setItem('firstname',USER.firstname)
      //@ts-ignore
      localStorage.setItem('lastname',USER.lastname)
      //@ts-ignore
      localStorage.setItem('pass',USER.password)
      //@ts-ignore
      localStorage.setItem('email',USER.email)




    }

  async getOneUser(userName: String)
  {

    let USERS = await this.http.get("http://localhost:8080/users/getUsers").toPromise();




    // @ts-ignore
   return  USERS.find(user => user.username == userName)
  }

  logout()
  {
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('pass')
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('email')
  }

  }


