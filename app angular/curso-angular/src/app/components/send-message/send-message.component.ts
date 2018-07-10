import { Component } from '@angular/core';
import { ObserveService } from '../../services/observe.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  message: string;
  constructor(private messageService: ObserveService) { }
 
  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage(this.message);
      this.message = "";
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }
}
