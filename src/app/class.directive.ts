import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input('appClass') set classNames(classObj: any) {

    for (let key in classObj) {

      if (classObj[key]) {

        this.render.addClass(this.element.nativeElement, key);

      } else {

        this.render.removeClass(this.element.nativeElement, key);
      }
    }
  }
}
