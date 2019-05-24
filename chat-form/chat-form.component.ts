import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from 'firebase';
import { Nanny } from 'src/app/auth/nanny.model';
import { switchMap } from "rxjs/operators";
import { ChatserviceService } from '../chatservice.service';
import { Message } from '../message.module';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/bot/chat.service';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  @Input()nannyid
  @Input()customerid
  msg: Message;
  message: string;
  newmessage: string;
  customer: Observable<Nanny>;
  constructor(private chatservice: ChatserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  sendnew() {
    console.log('send new');
    if (this.newmessage != '') {
      this.chatservice.sendmessage(this.nannyid,this.customerid,this.newmessage);
      this.newmessage = ''
    }
  }

}






