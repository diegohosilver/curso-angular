import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveMessageComponent } from './receive-message.component';

describe('ReceiveMessageComponent', () => {
  let component: ReceiveMessageComponent;
  let fixture: ComponentFixture<ReceiveMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
