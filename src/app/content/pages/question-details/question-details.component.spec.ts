// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { QuestionDetailsComponent } from './question-details.component';
// import {QuestionService} from "../../services/question.service";
// import {ActivatedRoute} from "@angular/router";
// import {RouterTestingModule} from "@angular/router/testing";
// import {AuthService} from "../../services/auth.service";
// import {IQuestion} from "../../models/question.model";
//
// describe('QuestionDetailsComponent', () => {
//   let component: QuestionDetailsComponent;
//   let fixture: ComponentFixture<QuestionDetailsComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [ QuestionDetailsComponent ],
//       providers: [ QuestionService, AuthService]
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuestionDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     let qst :  IQuestion = {
//
//       id:0,
//       title:"",
//       qst_text:"",
//       creation_date:new Date(),
//       score_qst:0,
//       author: {
//         username: "",
//         password: "",
//         firstname: "",
//         lastname: "",
//         score: 0
//       },
//       tags: [],
//       answers:[]
//     }
//
//
//
//
//     expect(component.question).toBeTruthy();
//   });
//
//
// });
