import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() quote: Quote;
@Input() voteCount = 0;
 @Input() myVote = 0;
@Output() change = new EventEmitter();

    upVote() {
        if (this.myVote === 1) {
            return;
        }

        this.myVote++;
        this.emitEvent();
    }

    downVote() {
        if (this.myVote === -1) {
            return;
        }

        this.myVote--;
        this.emitEvent();
    }

    emitEvent() {
        this.change.emit({myVote: this.myVote});
    }

  constructor() { }
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  ngOnInit() {
  }

}
