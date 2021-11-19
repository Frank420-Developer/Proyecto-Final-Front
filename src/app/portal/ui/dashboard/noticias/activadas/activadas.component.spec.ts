import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivadasComponent } from './activadas.component';

describe('ActivadasComponent', () => {
  let component: ActivadasComponent;
  let fixture: ComponentFixture<ActivadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
