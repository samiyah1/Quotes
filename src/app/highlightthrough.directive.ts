import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightthrough]'
})
export class HighlightthroughDirective {

  constructor(private elem: ElementRef) {}
  @HostListener('click') onClicks() {
    this.fontweight('bold');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.fontweight('None');
  }
  private fontweight(action: string) {
    this.elem.nativeElement.style.fontWeight = action;
  }
}
