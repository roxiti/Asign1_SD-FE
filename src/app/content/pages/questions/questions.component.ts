import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {IQuestion} from "../../models/question.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: any
  tag_S: any
  title_S: any

  constructor(private questionService: QuestionService) {


  }
  handleEventClicked(data: bigint)
  {
    console.log('New score: ',data)
  }

  ngOnInit(): void {
     this.questionService.getQuestions2().then(res => this.questions=res)
  }





}
