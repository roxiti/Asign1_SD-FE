import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./content/pages/home/home.component";
import {LoginComponent} from "./content/pages/login/login.component";
import {RegisterComponent} from "./content/pages/register/register.component";
import {UserComponent} from "./content/pages/user/user.component";
import {QuestionsComponent} from "./content/pages/questions/questions.component";
import {QuestionThumbnailComponent} from "./content/pages/question-thumbnail/question-thumbnail.component";
import {QuestionDetailsComponent} from "./content/pages/question-details/question-details.component";
import {ProfileComponent} from "./content/pages/profile/profile.component";
import {CreateQuestionComponent} from "./content/pages/create-question/create-question.component";
import {CreateAnswerComponent} from "./content/pages/create-answer/create-answer.component";
import {EditQuestionComponent} from "./content/pages/edit-question/edit-question.component";
import {EditAnswerComponent} from "./content/pages/edit-answer/edit-answer.component";
import {AdminComponent} from "./content/pages/admin/admin.component";
//import { Page1Component } from '..app/page1/Page1Component';



const routes: Routes = [


  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path : 'user/admin', component: AdminComponent },
  { path: 'user/:username', component: UserComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/:id', component: QuestionDetailsComponent },
  { path: 'user/:username/question/create', component: CreateQuestionComponent },
  { path: 'question/:username/edit/:id', component: EditQuestionComponent },
  { path: 'question/:username/answer/:id', component: CreateAnswerComponent },
  { path: 'question/:username/answer/:id/edit', component: EditAnswerComponent },
  { path: 'user/:username/profile', component: ProfileComponent },
  {path:'',component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


