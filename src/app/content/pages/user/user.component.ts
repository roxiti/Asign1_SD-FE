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
  questions!: IQuestion[]
  answers!: IAnswer[]
  constructor(private userService: UserService, private route: ActivatedRoute, public auth:AuthService, private questionService: QuestionService) { }

  ngOnInit(): void {

    this.user = this.userService.getUser(this.route.snapshot.params['username'])

    this.questions = this.questionService.getQuestionsOfUser(this.user.username)

    this.answers = this.questionService.searchAnswers(this.auth.currentUser?.username)

  }







}
