import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommunicationService } from './services/communication.service';
import { ObserveService } from './services/observe.service';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { StudentsComponent } from './components/students/students.component';

const ROUTES: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'send', component: SendMessageComponent },
  { path: 'students', component: StudentsComponent },
  { path: '', redirectTo: '/test', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    StudentsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [CommunicationService, ObserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
