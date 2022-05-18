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


  private ans_text!: FormControl
  private answer!: any
  private question!: IQuestion
  profileForm!: FormGroup



  constructor(private router: ActivatedRoute, private route:Router, private questionService: QuestionService) { }

  ngOnInit(): void {


    this.questionService.getOneAnswer(+this.router.snapshot.params['id']).then(res => {
      this.answer = res;
      this.ans_text = new FormControl(this.answer.ans_text,Validators.required);


      this.profileForm = new FormGroup({
        ans_text: this.ans_text,

      });

    })




  }




  validateText()
  {

    return this.ans_text.valid || this.ans_text.untouched

  }


  cancel()
  {
    return this.route.navigate(['home']);
  }

  saveNewAnsw(formValues: any){

    if (this.profileForm.valid) {
      console.log(formValues)


    //  this.questionService.updateCurrentQuestion(formValues,this.auth.currentUser ,this.question?.id_qst)
     // this.route.navigate(['questions'])

      this.questionService.updateCurrentAnswer(formValues,+this.router.snapshot.params['id']).then(res => this.answer = res)

    }

  }

}
