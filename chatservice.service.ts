import { Injectable } from '@angular/core';
import { Message } from './message.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { defineBase } from '@angular/core/src/render3';
import { PauthService } from '../auth/pauth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { auth, firestore } from 'firebase';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Chat } from './chat.module';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  
 chatcollection:AngularFirestoreCollection<any>
 id: Observable<string[]>


  constructor(private db: AngularFirestore,
    private auth: PauthService,
    private router: Router) {
   this.chatcollection = this.db.collection('chatmessages');
  }




  getchat(nannyid,customerid) {
    const uid = customerid
   const chatid = nannyid+customerid
   let subject = new Subject()
   this.db.collection('chatmessages').doc(chatid).snapshotChanges().subscribe(data => 
    {
      subject.next(data.payload.data())
      
    })
   
    return subject as Observable<any>;
   
    
  }


   create(nannyid,customerid) {
     
    console.log("created");
    const uid = customerid
    const docid= nannyid + customerid;
    const data = {
      uid:uid,
      createdAt: Date.now(),
      count: 0,
      messages: []
    }

    const docref = this.db.collection('chatmessages').doc(docid).set(data);
    return this.router.navigate(['chat'])
  }



  async sendmessage(nannyid,customerid, content) {
     
    const uid = customerid
    const newchatid = nannyid+customerid
    const data = {
      uid:uid,
      content:content,
      createdAt: Date.now()
    };
   
    if (uid) {
      const ref = this.db.collection('chatmessages').doc(newchatid);
      return ref.update({
        messages: firestore.FieldValue.arrayUnion(data)
      });
    }


    

  }
  
// docexists(){
//   const chatid='user7'
//  const ref =  this.db.collection('chatmessages').doc(chatid).get()
// }

  



}



