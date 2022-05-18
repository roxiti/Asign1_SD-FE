

import {IUser} from "./user.model";
import {ITags} from "./tags.model";
import {IAnswer} from "./answer.model";

export interface IQuestion
{
  id_qst:number,
  title:string,
  qst_text:string,
  creation_date:Date,
  score_qst:number,
  author: IUser,
  listOfTags?: ITags[],
  listOfAnswers:IAnswer[]




}





