import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ng-chileAd]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
