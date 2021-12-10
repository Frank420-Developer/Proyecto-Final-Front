import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNewsComponent } from './active-news.component';

describe('ActiveNewsComponent', () => {
  let component: ActiveNewsComponent;
  let fixture: ComponentFixture<ActiveNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
