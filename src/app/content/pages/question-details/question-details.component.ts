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

  question!: IQuestion

  constructor(private questionService:QuestionService, private route: ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    this.question = this.questionService.getOneQuestion(+this.route.snapshot.params['id'])



    console.log(this.question.answers);
  }

  handleClickMe(){
    // @ts-ignore
    this.eventClick.emit((this.question?.score_qst ) + 1)
  }

  checkAuthor()
  {
    return this.question.author.username == this.auth?.currentUser?.username
  }


}
