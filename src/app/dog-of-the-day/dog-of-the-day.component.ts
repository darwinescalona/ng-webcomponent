import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'ng-chile-dog',
  template: `
    <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script" rel="stylesheet">
    <div class="component_container">
      <h1>{{message}}</h1>
      <img src="{{imagen}}" />
    </div>
    <br>
    <button *ngIf="imagen.length > 0" (click)="sendUrl()">Emitir URL</button>
    <br>
  `,
  styles: [`
    .component_container {
      font-family: 'Nanum Pen Script', cursive;
      width: 580px;
      height: auto;
      border: 1px solid #CECECE;
      padding: 20px;
      text-align: center;
      background: #F2F2F2;
    }
    .component_container img {
      width: 100%;
      height: auto;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class DogOfTheDayComponent implements OnInit {

  public imagen = '';
  @Input() message = 'Dog of The Day';
  @Output() imagenEvent = new EventEmitter<string[]>();

  private refresh$ = new BehaviorSubject<boolean>(false);

  // change refresh to use getter and setter
  @Input()
  set refresh(value) {
      // set the latest value for  BehaviorSubject
      this.refresh$.next(!this.refresh);
  }
  get refresh() {
      // get the latest value from  BehaviorSubject
      return this.refresh$.getValue();
  }

  constructor(
    public http: HttpClient  ) { }

  ngOnInit() {
    this.refresh$
            .subscribe(x => {
              console.log('refresh', x);
              this.loadImage();
            });
    // this.loadImage();
  }

  loadImage() {
    this.http.get(environment.api_url).subscribe((dotd: any) => {
      this.imagen = dotd.message;
    });
  }

  sendUrl() {
    console.log('sendUrl');
    this.imagenEvent.emit([this.imagen, 'prueba']);
  }

  getUrl() {
    return this.imagen;
  }

}
