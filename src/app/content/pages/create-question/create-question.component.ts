import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IQuestion} from "../../models/question.model";
import {ITags} from "../../models/tags.model";
import {QuestionService} from "../../services/question.service";
import {queue} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  newQuestion!:IQuestion


  constructor(private router: Router,private questionService: QuestionService,private auth: AuthService) { }

  ngOnInit(): void {
  }


  saveQuestion(formValues:any)
  {
    console.log(this.auth.getUser())
    return this.questionService.createQuestion(formValues,this.auth.getUser())
    //console.log()
   // this.questionService.parseTags(formValues.tags)


  }

  cancel()
  {
    this.router.navigate(['home'])
  }


}
