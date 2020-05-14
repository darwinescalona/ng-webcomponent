import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef, DoBootstrap } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';

import { DogOfTheDayComponent } from './dog-of-the-day/dog-of-the-day.component';
import { PhotoOfTheDayComponent } from './photo-of-the-day/photo-of-the-day.component';
import { LatamCsPluginComponent } from './latam-cs-plugin/latam-cs-plugin.component';
import { AdDirective } from './ad.directive';

@NgModule({
   declarations: [
      LatamCsPluginComponent,
      AdDirective
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   entryComponents: [
    LatamCsPluginComponent
   ]
})
export class AppModule implements DoBootstrap {
  constructor( private injector: Injector ) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    /*const imagenEspacio = createCustomElement(DogOfTheDayComponent, { injector: this.injector });
    customElements.define('ng-chile-dotd', imagenEspacio);

    
    const photo = createCustomElement(PhotoOfTheDayComponent, { injector: this.injector });
    customElements.define('ng-chile-potd', photo);*/

    const plugin = createCustomElement(LatamCsPluginComponent, { injector: this.injector });
    customElements.define('ng-chile-latam-cs-plugin', plugin);
  }
}
