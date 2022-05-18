import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IQuestion} from "../../models/question.model";
import {ITags} from "../../models/tags.model";

@Component({
  selector: 'app-question-thumbnail',
  templateUrl: './question-thumbnail.component.html',
  styleUrls: ['./question-thumbnail.component.scss']
})
export class QuestionThumbnailComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {


  }
  @Input() question!: IQuestion
  @Output() eventClick = new EventEmitter()

  handleClickMe(){
    // @ts-ignore

  }


}
