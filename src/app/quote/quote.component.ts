import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote (1, 'Watch Finding Nemo'),
    new Quote (2, 'Buy Cookies'),
    new Quote (3, 'Get new Phone Case'),
    new Quote (4, 'Get Dog Food'),
    new Quote (5, 'Solve math homework'),
    new Quote (6, 'Plot my world domination plan'),

];
  constructor() { }

  ngOnInit() {
  }

}
