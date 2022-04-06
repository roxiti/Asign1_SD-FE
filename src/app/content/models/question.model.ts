

import {IUser} from "./user.model";
import {ITags} from "./tags.model";
import {IAnswer} from "./answer.model";

export interface IQuestion
{
  id:number,
  title:string,
  qst_text:string,
  creation_date:Date,
  score_qst:number,
  author: IUser,
  tags?: ITags[],
  answers:IAnswer[]




}





