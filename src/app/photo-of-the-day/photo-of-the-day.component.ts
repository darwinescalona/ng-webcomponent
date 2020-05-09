import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ng-chile-photo-of-the-day',
  template: `
    <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script" rel="stylesheet">
    <div class="component_container">
      <h1>Photo of day</h1>
      <img src="{{imagen}}" />
    </div>
    <br>
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
  `]
})
export class PhotoOfTheDayComponent implements OnInit {

  constructor(public http: HttpClient) { }
  public imagen = '';

  ngOnInit(): void {
    this.loadImage() ;
  }

  loadImage() {
    this.http.get(environment.api_url).subscribe((dotd: any) => {
      this.imagen = dotd.message;
    });
  }

}
