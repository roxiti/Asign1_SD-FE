//"ans_text": "Astazi",
//     "creation_date": "16/03/2022 14:23",
//     "score_ans": 0,
//     "author": {
//       "username": "marius",
//       "password": "cont2",
//       "firstname": "Marius",
//       "lastname": "Macean",
//       "score": 2

import {IUser} from "./user.model";

export interface  IAnswer
{
  id:number,
  ans_text: string,
  creation_date: Date,
  score_ans: number,
  author: IUser

}
