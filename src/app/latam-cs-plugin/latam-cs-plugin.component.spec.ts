import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatamCsPluginComponent } from './latam-cs-plugin.component';

describe('LatamCsPluginComponent', () => {
  let component: LatamCsPluginComponent;
  let fixture: ComponentFixture<LatamCsPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatamCsPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatamCsPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
