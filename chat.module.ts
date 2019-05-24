import { Message } from './message.module';

export interface Chat{
    count?:string
    messages?:Message
    createdAt?:number
}