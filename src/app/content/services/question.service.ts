import { Injectable } from '@angular/core'
import {Observable, Subject} from "rxjs";
import {IQuestion} from "../models/question.model";
import {ITags} from "../models/tags.model";
import {IUser} from "../models/user.model";
import {IAnswer} from "../models/answer.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {combineAll} from "rxjs/operators";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import {getSortHeaderNotContainedWithinSortError} from "@angular/material/sort/sort-errors";

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  async getQuestions2(): Promise<any>
  {
    let question = await this.http.get("http://localhost:8080/questions/getQuestions").toPromise();

    return question;
  }

  async getOneQuestion2(id:number): Promise <any>
  {
    let queryParams = new HttpParams();
    let question = await this.http.get("http://localhost:8080/questions/getOneQuestion?id="+id).toPromise();

    return question
  }

  async createQuestion2(input:any, tags:any, user: any): Promise<any>
  {
    let queryParams = new HttpParams();

    queryParams = queryParams.append("user",user);

    console.log(queryParams);

    let question = await  this.http.post("localhost:8080/questions/createQuestion",input).toPromise();

    return question
  }



  async getQuestionsOfUser(user: any):Promise<any>
  {

    if(user=="admin")
    {
      let question = await this.http.get("http://localhost:8080/questions/getQuestions").toPromise();

      return question
    }
    else { let question = await this.http.get("http://localhost:8080/questions/getQuestions").toPromise();

      // @ts-ignore
      return question.filter(quest => quest.author.username == user )
    }



   // console.log(user)





  }

  async deleteQuestion( id:any):Promise<any>
  {

    let questions = await this.http.delete("http://localhost:8080/questions/deleteOneQuestion?id="+id).toPromise();

    return questions

  }

  async deleteAnswer(id:any):Promise<any>
  {
    let answer = await this.http.delete("http://localhost:8080/answers/deleteOneAnswer?id="+id).toPromise();


    return answer
  }


  getlistTags(id:number) {


    let qst
    let listT
    let listS: any[]=[]


     this.getOneQuestion2(id).then(res => {qst = res;

     listT = qst.listOfTags;
       let list=[];

       // @ts-ignore
       for (let x of listT) {

         listS.push(x.tag_name);





       }

      console.log(listS)
       return listS
     })



  }

  async createQuestion(input:any, user: any):Promise<any>
  {


    let question = await this.http.post("http://localhost:8080/questions/createQuestion"+"?tags="+ input.tags+"&user="+user,input).toPromise();




    return question


  }

  async createAnswer(input:any,user:any,id:number):Promise<any>
  {


    let answer = await this.http.post("http://localhost:8080/answers/createAnswer"+"?user="+ user +"&id_qst="+id,input).toPromise();



    return answer


  }

  async updateCurrentQuestion(input:any,user:any,id:number)
  {


    let question = await this.http.post("http://localhost:8080/questions/updateOneQuestion?tags="+ input.listOfTags+"&user="+ user +"&id_qst="+id,{title: input.title, qst_text: input.qst_text}).toPromise();



    return question


  }

  async likeButtonQuestion( user:any, id:number)
  {



    let questionUp = await this.http.get("http://localhost:8080/voteQuestion/voteUp?id=" + id + "&user=" + user).toPromise();



    return questionUp
  }

  async dislikeButtonQuestion(user:any, id:number)
  {
    let questionDown = await this.http.get("http://localhost:8080/voteQuestion/voteDown?id="+id+"&user="+ user).toPromise();

    return questionDown

  }

  async likeButtonAnswer(user:any, id:number)
  {
    let answerUp = await this.http.get("http://localhost:8080/voteAnswer/voteUp?id="+id+"&user="+ user).toPromise();

   // console.log(answerUp)

    return answerUp

  }

  async dislikeButtonAnswer(user:any, id:number)
  {
    let answerDown = await this.http.get("http://localhost:8080/voteAnswer/voteDown?id="+id+"&user="+ user).toPromise();

    return answerDown

  }

  async getAnswersOfUser(user: any):Promise<any> {
    let answers = await this.http.get("http://localhost:8080/answers/getAnswers").toPromise();
    if(user=="admin") {
      return answers


    }
    else {

      // @ts-ignore
      return answers.filter(answ => answ.author.username == user)
    }



  }

  async getOneAnswer(id:any):Promise<any>
  {
    let answer = await this.http.get("http://localhost:8080/answers/getOneAnswer?id="+id).toPromise();

    return answer

  }


  async updateCurrentAnswer(input:any,id:number):Promise<any>
  {

    let answer = await this.http.post("http://localhost:8080/answers/editOneAnswer?id="+id,input).toPromise();

    return answer


  }







}





