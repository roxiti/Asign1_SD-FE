import { Component, OnInit } from '@angular/core';
import {IAnswer} from "../../models/answer.model";
import {QuestionService} from "../../services/question.service";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {QuestionDetailsComponent} from "../question-details/question-details.component";
import {IQuestion} from "../../models/question.model";

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.scss']
})
export class CreateAnswerComponent implements OnInit {

  newAnswer!:IAnswer
  question!:IQuestion
  constructor(private router:Router, private questionService: QuestionService,private auth: AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveAnswer(formValues:any)
  {



    this.question = this.questionService.getOneQuestion(+this.route.snapshot.params['id'])
    this.questionService.createAnswer(formValues,this.auth.currentUser,this.question.id)
    this.router.navigate(['questions/',this.question.id])


  }

  cancel()
  {
    this.router.navigate(['questions'])
  }




}
