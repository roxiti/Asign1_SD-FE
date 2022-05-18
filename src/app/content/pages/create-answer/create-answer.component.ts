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
  question:any
  constructor(private router:Router, private questionService: QuestionService,private auth: AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.questionService.getOneQuestion2(+this.route.snapshot.params['id']).then(res => this.question = res)
  }

  saveAnswer(formValues:any)
  {




   // console.log(this.question)

    this.questionService.createAnswer(formValues,this.auth.getUser(),this.question?.id_qst)
    this.router.navigate(['questions/',this.question?.id_qst])


  }

  cancel()
  {
    this.router.navigate(['questions'])
  }




}
