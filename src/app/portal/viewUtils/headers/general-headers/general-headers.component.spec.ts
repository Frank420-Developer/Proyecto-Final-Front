import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHeadersComponent } from './general-headers.component';

describe('GeneralHeadersComponent', () => {
  let component: GeneralHeadersComponent;
  let fixture: ComponentFixture<GeneralHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
