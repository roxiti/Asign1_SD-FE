import { Component, OnInit } from '@angular/core';
import {IAnswer} from "../../models/answer.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: any
  questions!: any
  answers!: IAnswer[]
  constructor(private userService: UserService, private route: ActivatedRoute, public auth:AuthService, private questionService: QuestionService) { }

  ngOnInit(): void {

    this.userService.getUsers().then(res => this.users = res)

    this.questionService.getQuestionsOfUser(this.auth.getUser()).then(res => this.questions = res)
    //console.log(this.questions)


    this.questionService.getAnswersOfUser(this.auth.getUser()).then(res => this.answers = res)
  }

}
