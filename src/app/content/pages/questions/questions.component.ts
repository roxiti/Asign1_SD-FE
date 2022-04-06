import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {IQuestion} from "../../models/question.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: IQuestion[] | undefined

  constructor(private questionService: QuestionService) {


  }
  handleEventClicked(data: bigint)
  {
    console.log('New score: ',data)
  }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions()
  }





}
