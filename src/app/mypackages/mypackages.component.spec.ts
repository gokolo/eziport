import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypackagesComponent } from './mypackages.component';

describe('MypackagesComponent', () => {
  let component: MypackagesComponent;
  let fixture: ComponentFixture<MypackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
