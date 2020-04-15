import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ng-chile-dog',
  template: `
    <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script" rel="stylesheet">
    <div class="component_container">
      <h1>{{message}}</h1>
      <img src="{{imagen}}" *ngIf="imagen"/>
    </div>
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

  public imagen;
  public message = 'Dog of The Day';

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(environment.api_url).subscribe((dotd: any) => {
      this.imagen = dotd.message;
    });
  }

}
