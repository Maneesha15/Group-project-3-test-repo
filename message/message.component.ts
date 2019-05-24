import { Component, OnInit,Input } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';
import { Chat } from '../chat.module';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message.module';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()nannyid
  @Input()customerid
  chat: Chat
  messages: any
  owner:boolean
  Id='user7'

  constructor(private chs:ChatserviceService,private route:ActivatedRoute) { }

  ngOnInit(){
    console.log(this.nannyid)
    console.log('message chat id')
      const id = this.route.snapshot.paramMap.get('id');
    this.chs.getchat(this.nannyid,this.customerid).subscribe(next=>{ next.messages
    
   this.messages = next.messages

 })

  
  }

}
