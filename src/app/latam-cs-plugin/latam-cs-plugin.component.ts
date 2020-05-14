import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ng-chile-latam-cs-plugin',
  template: `
    <form [formGroup]="form">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Select component</label>
        <select class="form-control" formControlName="components" >
          <option value="-1">Select</option>
          <option value="0">DogOfTheDayComponent</option>
          <option value="1">PhotoOfTheDayComponent</option>
        </select>
      </div>
    </form>
    <div class="ad-banner-example">
      <h3>Main Plugin</h3>
      <ng-template ng-chileAd></ng-template>
    </div>
  `,
  styles: [
    `
    .ad-banner-example {
      border: 1px solid #10e334;
    }
    `
  ]
})
export class LatamCsPluginComponent implements OnInit {
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  /*components = [
    DogOfTheDayComponent,
    PhotoOfTheDayComponent
  ];*/

  form: FormGroup;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      components: ['']
    });
   }

  ngOnInit(): void {
    this.form.controls['components'].setValue('-1');
    this.form.controls['components'].valueChanges.subscribe(comp =>
      {
        console.log('comp', comp);
        this.loadComponent(comp as number);
      });
  }

  async loadComponent(index: number) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    if (index < 0) {
      return;
    }
    if (index == 1) {
      const { PhotoOfTheDayComponent } = await import('../photo-of-the-day/photo-of-the-day.component');
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PhotoOfTheDayComponent);
      
      const componentRef = viewContainerRef.createComponent(componentFactory);
    } else {
      const { DogOfTheDayComponent } = await import('../dog-of-the-day/dog-of-the-day.component');
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DogOfTheDayComponent);
      const componentRef = viewContainerRef.createComponent(componentFactory);

    }

    
  }

}
