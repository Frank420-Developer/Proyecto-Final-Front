import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHeadersComponent } from './second-headers.component';

describe('SecondHeadersComponent', () => {
  let component: SecondHeadersComponent;
  let fixture: ComponentFixture<SecondHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
