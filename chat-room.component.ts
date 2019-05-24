import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatserviceService } from './chatservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
nannyid:string;
customid:string;
docid: Observable<any[]>
  
  constructor(private router:Router, private route:ActivatedRoute, private chs:ChatserviceService) { }

  ngOnInit() {
    const Nid = this.route.snapshot.paramMap.get('Nid');
    const cid = this.route.snapshot.paramMap.get('Cid');
    this.nannyid=Nid;
    this.customid=cid;
    console.log(this.customid);

   

  }


}
