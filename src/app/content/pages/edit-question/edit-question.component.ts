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

  private title!: FormControl
  private qst_text!: FormControl
  private listOfTags!: FormControl
  private question: any
  profileForm!: FormGroup

  constructor(private questionService: QuestionService, private router: ActivatedRoute, private auth: AuthService, private route:Router) {
  }

  ngOnInit(): void {
   this.questionService.getOneQuestion2(+this.router.snapshot.params['id']).then(res => {this.question = res;
    this.title = new FormControl(this.question.title,Validators.required);
    this.qst_text = new FormControl(this.question.qst_text,Validators.required);
    let listS = []
     for( let x of this.question.listOfTags)
     {
       listS.push(x.tag_name)
     }
    this.listOfTags = new FormControl(listS,Validators.required);
   //  console.log(this.question.title);

     this.profileForm = new FormGroup({
       title: this.title,
       qst_text: this.qst_text,
       listOfTags: this.listOfTags
     });
   }



   )



  }


  saveNewQst(formValues: any) {
    if (this.profileForm.valid) {
      console.log(formValues)
      this.questionService.updateCurrentQuestion(formValues,this.auth.getUser() ,this.question?.id_qst)
      this.route.navigate(['questions'])
    }

  }

  validateTitle()
  {

      return this.title.valid || this.title.untouched

  }
  validateText()
  {

    return this.qst_text.valid || this.qst_text.untouched

  }
  validateTags()
  {

    return this.listOfTags.valid || this.listOfTags.untouched

  }

  cancel()
  {
    return this.route.navigate(['home']);
  }
}
