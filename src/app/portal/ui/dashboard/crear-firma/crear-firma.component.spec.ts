import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFirmaComponent } from './crear-firma.component';

describe('CrearFirmaComponent', () => {
  let component: CrearFirmaComponent;
  let fixture: ComponentFixture<CrearFirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
