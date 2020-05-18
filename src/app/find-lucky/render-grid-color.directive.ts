import {Directive, HostBinding, Input} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Directive({
  selector: '[appRenderGridColor]'
})
export class RenderGridColorDirective {
  @Input() luckyNumber: number;
  @HostBinding('style.backgroundColor') get bgColor() {
    if (isNullOrUndefined(this.luckyNumber) || this.luckyNumber === 0) {
      return null;
    }
    if (this.luckyNumber <= 3) {
      return 'red';
    } else if (this.luckyNumber <= 7) {
      return 'green';
    } else {
      return 'blue';
    }
  }

  constructor() { }

}
