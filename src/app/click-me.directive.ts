import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickMe]',
})
export class ClickMeDirective {
  constructor() {}
  @HostBinding('class.clicked')
  hasBeenClicked = false;

  @HostListener('click')
  onClick() {
    this.hasBeenClicked = true;
  }
}
