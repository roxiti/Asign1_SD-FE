import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {IQuestion} from "../../models/question.model";
import {IAnswer} from "../../models/answer.model";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/user.model";
import {ITags} from "../../models/tags.model";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  question: any
  once: number = 0

  constructor(private questionService:QuestionService, private route: ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
   // this.question = this.questionService.getOneQuestion(+this.route.snapshot.params['id'])

    this.questionService.getOneQuestion2(+this.route.snapshot.params['id']).then(res => this.question = res);


   // console.log(this.question.answers);
  }

  handleClickLike(){

   // console.log(this.auth.currentUser)
  //  console.log(+this.route.snapshot.params['id'])
   this.questionService.likeButtonQuestion(this.auth.getUser(),+this.route.snapshot.params['id']).then(res => this.question = res);



  }

  handleClickDislike(){

    this.questionService.dislikeButtonQuestion(this.auth.getUser(),+this.route.snapshot.params['id']).then(res => this.question = res);


  }

  deleteButton()
  {
    this.questionService.deleteQuestion(+this.route.snapshot.params['id'])
  }


  checkAuthor()
  {

    //return true;
    return this.question?.author?.username == this.auth.getUser()
  }



}
