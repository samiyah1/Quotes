import { Component, OnInit, Output , Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Susan', 'Dr.Seuss', 'You know you are in love when you cannot fall asleep because reality is finally better than your dreams', new Date(2018, 1, 1) ),
    new Quote(2, 'Becky', ' Sarah Dessen, The Truth About Forever', 'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment' , new Date(2017, 6, 9) ),
    new Quote(3,  'LoverBoy', ' Pablo Neruda, 100 Love Sonnets',  'I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.' , new Date(2017, 1, 12) ),
    new Quote(4, 'Pinky', 'Paulo Coehlo', 'So, I love you because the entire universe conspired to help me find you.' , new Date(2017, 0, 18) ),
    new Quote(5, 'Lulu', 'Nicholas Sparks, The Notebook', 'So it is not gonna be easy. It is going to be really hard; we are gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me ... every day.', new Date(2017, 2, 14) ),
    new Quote(6, 'Esther', ' Mitch Albom', 'Lost love is still love. It takes a different form, that is all. You can not see their smile or bring them food or tousle their hair or move them around a dance floor. But when those senses weaken another heightens. Memory. Memory becomes your partner. You nurture it. You hold it. You dance with it.' , new Date(2017, 3, 14) ),

];
showDetails(index) {
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

addNewQuote(quote) {
  const quotesLength = this.quotes.length;
  quote.id = quotesLength + 1;
  quote.completeDate = new Date(quote.completeDate);
  this.quotes.push(quote);

}
deleteQuote(isComplete, index) {
  if (isComplete) {
    const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
}

  constructor() {}
  ngOnInit() {
  }

}
