import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDangerText]'
})
export class DangerTextDirective {

  constructor(private el : ElementRef) { 
  
  }

}
