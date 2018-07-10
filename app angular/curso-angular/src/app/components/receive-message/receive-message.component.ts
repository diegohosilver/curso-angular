import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObserveService } from '../../services/observe.service';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent {
  messages: string[] = [];
  subscription: Subscription;

  constructor(private observe: ObserveService) {
      // subscribe to home component messages
      this.subscription = this.observe.getMessage().subscribe(message => { this.messages.push(message.text) });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
