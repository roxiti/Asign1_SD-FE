import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {IQuestion} from "../../models/question.model";

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  private questionTitle!: FormControl
  private questionText!: FormControl
  private questionTags!: FormControl
  private question!: IQuestion
  profileForm!: FormGroup

  constructor(private questionService: QuestionService, private router: ActivatedRoute, private route:Router) {
  }

  ngOnInit(): void {
    this.question = this.questionService.getOneQuestion(+this.router.snapshot.params['id'])
    this.questionTitle = new FormControl(this.questionService.getOneQuestion(this.question.id).title,Validators.required)
    this.questionText = new FormControl(this.questionService.getOneQuestion(this.question.id).qst_text,Validators.required)
    this.questionTags = new FormControl(this.questionService.getlistTags(this.question.id),Validators.required)
    this.profileForm = new FormGroup({
      questionTitle: this.questionTitle,
      questionText: this.questionText,
      questionTags: this.questionTags
    })
  }


  saveNewQst(formValues: any) {
    if (this.profileForm.valid) {
      console.log(formValues.questionTags)
      this.questionService.updateCurrentQuestion(formValues.questionTitle, formValues.questionText, formValues.questionTags, this.question.id)
      this.route.navigate(['questions'])
    }

  }

  validateTitle()
  {

      return this.questionTitle.valid || this.questionTitle.untouched

  }
  validateText()
  {

    return this.questionText.valid || this.questionText.untouched

  }
  validateTags()
  {

    return this.questionTags.valid || this.questionTags.untouched

  }

  cancel()
  {
    return this.route.navigate(['home']);
  }
}
