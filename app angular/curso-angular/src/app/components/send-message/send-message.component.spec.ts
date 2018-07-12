import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SendMessageComponent } from './send-message.component';
import { ReceiveMessageComponent } from '../receive-message/receive-message.component';

describe('SendMessageComponent', () => {
  let component: SendMessageComponent;
  let fixture: ComponentFixture<SendMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageComponent, ReceiveMessageComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
