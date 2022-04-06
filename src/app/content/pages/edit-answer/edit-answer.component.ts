import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IQuestion} from "../../models/question.model";
import {ActivatedRoute, Router} from "@angular/router";
import {IAnswer} from "../../models/answer.model";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.scss']
})
export class EditAnswerComponent implements OnInit {


  private answerText!: FormControl
  private answer!: IAnswer
  private question!: IQuestion
  profileForm!: FormGroup



  constructor(private router: ActivatedRoute, private route:Router, private questionService: QuestionService) { }

  ngOnInit(): void {
    //this.answer = this.questionService.getOneQuestion(+this.router.snapshot.params['id'])
    this.question = this.questionService.getOneQuestion(+this.router.snapshot.params['id'])

    //this.answer = this.questionService.getOneAnswer(this.question.id,this.answer.id,)

    this.answerText = new FormControl(this.questionService.getOneQuestion(this.question.id).answers,Validators.required)

    this.profileForm = new FormGroup({

      answerText: this.answerText
    })
  }


  // saveNewAnswer(formValues: any) {
  //   if (this.profileForm.valid) {
  //     console.log(formValues.answers)
  //
  //     this.answer = this.questionService.getOneAnswer(this.question.id,this.answer.id,)
  //
  //
  //   //  this.questionService.updateCurrentQuestion(formValues.questionTitle, formValues.questionText, formValues.questionTags, this.question.id)
  //     this.route.navigate(['questions'])
  //   }
  //
  // }

  validateText()
  {

    return this.answerText.valid || this.answerText.untouched

  }


  cancel()
  {
    return this.route.navigate(['home']);
  }

}
