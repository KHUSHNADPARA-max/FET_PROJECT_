import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseClick() {
    console.log('hii');
    this.highlight('green');
  }

  @HostListener('mouseout') onMouseOut(){
    this.highlight('white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
