import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef, DoBootstrap } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { DogOfTheDayComponent } from './dog-of-the-day/dog-of-the-day.component';
import { PhotoOfTheDayComponent } from './photo-of-the-day/photo-of-the-day.component';
import { LatamCsPluginComponent } from './latam-cs-plugin/latam-cs-plugin.component';

@NgModule({
  declarations: [DogOfTheDayComponent, PhotoOfTheDayComponent, LatamCsPluginComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  entryComponents: [DogOfTheDayComponent, PhotoOfTheDayComponent]
})
export class AppModule implements DoBootstrap {
  constructor( private injector: Injector ) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    const imagenEspacio = createCustomElement(DogOfTheDayComponent, { injector: this.injector });
    customElements.define('ng-chile-dotd', imagenEspacio);

    
    const photo = createCustomElement(PhotoOfTheDayComponent, { injector: this.injector });
    customElements.define('ng-chile-potd', photo);
  }
}
