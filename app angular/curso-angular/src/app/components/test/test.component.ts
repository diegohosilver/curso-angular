import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  heroes;

  constructor(private communication: CommunicationService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.communication.get('heroes').then(heroes => {
      this.heroes = heroes;
    }, error => {
      console.log(error);
    })
  }
}
