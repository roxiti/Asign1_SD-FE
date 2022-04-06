import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import {AuthService} from "../../services/auth.service";
import {QuestionService} from "../../services/question.service";

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsComponent ],
      providers: [ QuestionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should question list bigger than 0", () =>
  {
    // @ts-ignore
    expect(component.questions?.length > 0)
  })

  it("question tags bigger than 0", () =>
  {
    // @ts-ignore
    for ( let x of component.questions)
    {
      // @ts-ignore
      expect(x.tags.length > 0)
    }
  })

  it("question must have a author", () =>
  {
    // @ts-ignore
    for ( let x of component.questions)
    {
      // @ts-ignore
      expect(x.author != null)
    }
  })

});
