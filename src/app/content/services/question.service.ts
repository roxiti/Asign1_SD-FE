import { Injectable } from '@angular/core'
import {Observable, Subject} from "rxjs";
import {IQuestion} from "../models/question.model";
import {ITags} from "../models/tags.model";
import {IUser} from "../models/user.model";
import {IAnswer} from "../models/answer.model";

@Injectable()
export class QuestionService {
  getQuestions():IQuestion[]
  {


    return QUESTIONS
  }
  getQuestionsOfUser(user: string):IQuestion[]
  {


    return QUESTIONS.filter(quest => quest.author.username == user )
  }

  getTAGS():ITags[]
  {
    return TAGS
  }

  getlistTags(id:number) {



    const listT = this.getOneQuestion(id).tags
    let list=[]
    let listS=new String("")

    let cnt = listT?.length
    // @ts-ignore
    for (let x of listT) {

     listS += x.name

      // @ts-ignore
      if(cnt > 1)
      listS += ','

      // @ts-ignore
      cnt--;

     // list.push(x.name)



    }

    return listS

   // console.log(list)
    console.log(listS)
  }

  getOneQuestion(id:number):IQuestion
  {
      return <IQuestion>QUESTIONS.find(question => question.id == id)
  }


  // getOneAnswer(id:number, ida:number, user:any)
  // {
  //   for(let x of QUESTIONS)
  //   {
  //     for(let y of x.answers)
  //     {
  //         if(y.author == user.username)
  //         {
  //           return y
  //         }
  //     }
  //   }
  // }

  parseTags(message:any)
  {

    const array = message.split(',')

    for( let x in TAGS)
    {
      TAGS.pop()
    }
      TAGS.pop()

    for ( let x in array)
    {
      if(array[x])
      TAGS.push(
        {
          name:array[x]
        }
      )
    }

    return TAGS

  }

  parseTagsString(message:any)
  {




    for ( let x in message)
    {
      TAGS.push(
        {
          name:x
        }
      )
    }

    return TAGS

  }

  createQuestion(input:any, user: any)
  {

    QUESTIONS.push({
      id:7,
      title:input.title,
      qst_text:input.qst_text,
      creation_date:new Date(),
      score_qst:0,
      author: {
        username: user.username,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        score:34

      },
      tags: this.parseTags(input.tags),
      answers:[]


    })

    console.log(QUESTIONS)
    return QUESTIONS;

  }

  createAnswer(input:any,user:any,id:number)
  {

    this.getOneQuestion(id).answers?.push(
      {
        id:3,
        ans_text: input.ans_text,
        creation_date: new Date(),
        score_ans: 0,
        author: {
          username: user.username,
          password: user.password,
          firstname: user.firstname,
          lastname: user.lastname,
          score: 2
        }
      }

    )

    console.log(this.getOneQuestion(id).answers)

    return this.getOneQuestion(id).answers


  }

  updateCurrentQuestion(title:string,text:string,tags:string, id:number)
  {

    // @ts-ignore
    this.getOneQuestion(id)?.title = title
    // @ts-ignore
    this.getOneQuestion(id)?.qst_text = text

    // @ts-ignore
    this.getOneQuestion(id)?.tags = this.parseTags(tags)

    console.log(this.getOneQuestion(id))
  }

  updateCurrentAnswer(text:string, id:number, ida:number)
  {



    // @ts-ignore
    this.getOneQuestion(id)?.answers = text


    console.log(this.getOneQuestion(id))
  }


  searchAnswers(user:any)
  {
    let listA =[]

    for(let x of QUESTIONS)
    {

       for(let  a of x.answers)
       {
          if(a.author.username == user)
          {
            // @ts-ignore
            listA.push(a)
          }
       }
    }

    // @ts-ignore
    return listA

    console.log(listA)
  }



}




const TAGS:ITags[]=[




]


const QUESTIONS:IQuestion[] = [
    {
      id:1,
      title:'How to work with Spring?',
      qst_text:'I have difficulties understanding working with Spring. Some good resources ?',
      creation_date:new Date('01/01/2022 09:23:11'),
      score_qst:1,
      author: {
        username: 'maria',
        password: 'parola12',
        firstname:'Maria',
        lastname:'Ioana',
        score:34
      },
      tags: [
        {
         name: "Java"
        },
        {
          name: "programming"
        }
      ],
      answers:[
        { id:1,
          ans_text: "Binitelsssss",
          creation_date: new Date('03/16/2022 13:42:11'),
          score_ans: 0,
          author: {
            username: "marius",
            password: '1234',
            firstname: "Marius",
            lastname: "Macean",
            score: 2
          }
        },
        { id:2,
          ans_text: "Hello",
          creation_date: new Date('03/16/2022 13:42:11'),
          score_ans: 0,
          author: {
            username: "marius",
            password: '1234',
            firstname: "Marius",
            lastname: "Macean",
            score: 2}
        }
      ]




    },
    {
      id:2,
      title:'Want to learn Java',
      qst_text:'Some good resources ?',
      creation_date:new Date('2022-11-23 20:30:12'),
      score_qst:0,
      author: {
        username: 'ana23',
        password: 'ana',
        firstname:'Ana',
        lastname:'Pop',
        score:23
      },
      tags: [
        {
          name: "Python nou"
        },
        {
          name: "coding"
        }
      ],
      answers:[
        { id:1,
        ans_text: "Hello",
        creation_date: new Date('03/16/2022 13:42:11'),
        score_ans: 0,
        author: {
          username: 'maria',
          password: 'parola12',
          firstname:'Maria',
          lastname:'Ioana',
          score:34
        }
}
      ]

    }

]
