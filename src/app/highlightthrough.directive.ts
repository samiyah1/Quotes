import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightthrough]'
})
export class HighlightthroughDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.fontWeight = 'bold';
  }
}
