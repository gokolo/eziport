import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSearchFormComponent } from './send-search-form.component';

describe('SendSearchFormComponent', () => {
  let component: SendSearchFormComponent;
  let fixture: ComponentFixture<SendSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
