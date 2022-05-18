import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IQuestion} from "../../models/question.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-use-thumbnail',
  templateUrl: './use-thumbnail.component.html',
  styleUrls: ['./use-thumbnail.component.scss']
})
export class UseThumbnailComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  @Input() user: any
  @Output() eventClick = new EventEmitter()


   banUser() {
     this.authService.banUser(this.user.username).then(res => this.user = res)
     console.log(this.user.email)
     this.authService.sendEmail(this.user.email)
     console.log(this.user)

   }

   unbanUser()
   {
    this.authService.unbanUser(this.user.username).then(res=> this.user = res)
   }

  isBanned()
  {
    if(this.user.ban ==1)
      return true
    else return false
  }


}
