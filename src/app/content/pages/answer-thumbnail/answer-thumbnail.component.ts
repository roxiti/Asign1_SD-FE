import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from "../../models/question.model";
import {IAnswer} from "../../models/answer.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-answer-thumbnail',
  templateUrl: './answer-thumbnail.component.html',
  styleUrls: ['./answer-thumbnail.component.scss']
})
export class AnswerThumbnailComponent implements OnInit {

  @Input() answer!: IAnswer
  constructor(public auth:AuthService) { }

  ngOnInit(): void {


  }

  handleClickMe(){
    // @ts-ignore
    this.eventClick.emit((this.question?.score_qst ) + 1)
  }

  checkAuthor()
  {
    return this.answer.author.username == this.auth?.currentUser?.username
  }


}
