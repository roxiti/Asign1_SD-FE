import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from "../../models/question.model";
import {IAnswer} from "../../models/answer.model";
import {AuthService} from "../../services/auth.service";
import {QuestionService} from "../../services/question.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-answer-thumbnail',
  templateUrl: './answer-thumbnail.component.html',
  styleUrls: ['./answer-thumbnail.component.scss']
})
export class AnswerThumbnailComponent implements OnInit {

  @Input() answer!: any
  constructor(public auth:AuthService,public questionService: QuestionService,private route: ActivatedRoute) { }

  ngOnInit(): void {



  }

  handleClickLike(){


    return this.questionService.likeButtonAnswer(this.auth.getUser(),this.answer.id_answ).then(r => this.answer  = r)

  }

  handleClickDislike()
  {

    return this.questionService.dislikeButtonAnswer(this.auth.getUser(),this.answer.id_answ).then(r => this.answer  = r)


  }

  deleteButton ()
  {
    return this.questionService.deleteAnswer(this.answer.id_answ)
  }

  checkAuthor()
  {
    return this.answer.author.username == this.auth.getUser()
  }


}
