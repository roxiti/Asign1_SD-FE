import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Page1Component } from './page1/page1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './content/pages/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './content/pages/login/login.component';
import {MatCardModule} from "@angular/material/card";
import { RegisterComponent } from './content/pages/register/register.component';
import { UserComponent } from './content/pages/user/user.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import { QuestionsComponent } from './content/pages/questions/questions.component';
import { QuestionThumbnailComponent } from './content/pages/question-thumbnail/question-thumbnail.component';
import {QuestionService} from "./content/services/question.service";
import {UserService} from "./content/services/user.service";
import {MatChipsModule} from "@angular/material/chips";
import { AnswerThumbnailComponent } from './content/pages/answer-thumbnail/answer-thumbnail.component';
import { QuestionDetailsComponent } from './content/pages/question-details/question-details.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './content/pages/navbar/navbar.component';

import { FormsModule } from '@angular/forms'

import { ReactiveFormsModule} from '@angular/forms'
import {AuthService} from "./content/services/auth.service";
import { ProfileComponent } from './content/pages/profile/profile.component';
import { CreateQuestionComponent } from './content/pages/create-question/create-question.component';
import { CreateAnswerComponent } from './content/pages/create-answer/create-answer.component';
import { EditQuestionComponent } from './content/pages/edit-question/edit-question.component';
import { EditAnswerComponent } from './content/pages/edit-answer/edit-answer.component';
import {HttpClientModule } from "@angular/common/http";
import {FilterTitlePipe} from "./content/modules/filterTitle";
import {FilterTagPipe} from "./content/modules/filterTag";
import { AdminComponent } from './content/pages/admin/admin.component';
import { UseThumbnailComponent } from './content/pages/use-thumbnail/use-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    QuestionsComponent,
    QuestionThumbnailComponent,
    AnswerThumbnailComponent,
    QuestionDetailsComponent,
    NavbarComponent,
    ProfileComponent,
    CreateQuestionComponent,
    CreateAnswerComponent,
    EditQuestionComponent,
    EditAnswerComponent,
    FilterTitlePipe,
    FilterTagPipe,
    AdminComponent,
    UseThumbnailComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        TabMenuModule,
        MatMenuModule,
        MatTabsModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatChipsModule,
        FormsModule,
      ReactiveFormsModule,
      HttpClientModule,



    ],
  providers: [QuestionService,UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
