import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef, DoBootstrap } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { DogOfTheDayComponent } from './dog-of-the-day/dog-of-the-day.component';

@NgModule({
  declarations: [DogOfTheDayComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  entryComponents: [DogOfTheDayComponent]
})
export class AppModule implements DoBootstrap {
  constructor( private injector: Injector ) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    const imagenEspacio = createCustomElement(DogOfTheDayComponent, { injector: this.injector });
    customElements.define('ng-chile-dotd', imagenEspacio);
  }
}
