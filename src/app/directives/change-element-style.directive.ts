import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appChangeElementStyle]'
})
export class ChangeElementStyleDirective {
  @Input() color;

  @HostBinding('style.color') get fontColor() {
    return this.color ? this.color : '';
  }

  constructor() {
  }


}
