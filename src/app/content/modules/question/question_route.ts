import {QuestionsComponent} from "../../pages/questions/questions.component";
import {QuestionDetailsComponent} from "../../pages/question-details/question-details.component";
import {CreateQuestionComponent} from "../../pages/create-question/create-question.component";
import {EditQuestionComponent} from "../../pages/edit-question/edit-question.component";


export const question_Routes=[

{ path: 'questions', component: QuestionsComponent },
{ path: 'questions/:id', component: QuestionDetailsComponent },
{ path: 'user/:username/question/create', component: CreateQuestionComponent },
{ path: 'question/:username/edit/:id', component: EditQuestionComponent }

]
