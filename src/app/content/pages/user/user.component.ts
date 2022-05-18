import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IQuestion} from "../../models/question.model";
import {QuestionService} from "../../services/question.service";
import {AnswerThumbnailComponent} from "../answer-thumbnail/answer-thumbnail.component";
import {IAnswer} from "../../models/answer.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})



export class UserComponent implements OnInit {

  user: any
  questions!: any
  answers!: IAnswer[]
  constructor(private userService: UserService, private route: ActivatedRoute, public auth:AuthService, private questionService: QuestionService) { }

  ngOnInit(): void {

    this.user = this.auth.getOneUser(this.route.snapshot.params['username'])
    //console.log(this.user)

     this.questionService.getQuestionsOfUser(this.auth.getUser()).then(res => this.questions = res)
    //console.log(this.questions)

    console.log(this.auth?.currentUser?.username)
    this.questionService.getAnswersOfUser(this.auth.getUser()).then(res => this.answers = res)

  }







}
